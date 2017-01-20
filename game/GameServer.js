var qs = require('querystring'); // 参数解析库
var crypto = require('crypto');  // 加载crypto库
var os = require('os');
var WebSocket = require('ws');
var common = require('./common');

function GameServer()
{
	this.config = {
		serverPort: 9000,
		WS: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
	};
}

module.exports = GameServer;

GameServer.prototype.start = function()
{
	function handshake(key, client)
	{
		if (client.writable)
		{
			var acceptKey = crypto.createHash("sha1").update(key + this.WS).digest('base64')
			client.write('HTTP/1.1 101 Switching Protocols\r\n');
		    client.write('Upgrade: websocket\r\n');
		    client.write('Connection: Upgrade\r\n');
		    client.write('Sec-WebSocket-Accept: ' + acceptKey + '\r\n');
			client.write('\r\n');
		}
	}

	this.socketServer = new WebSocket.Server({port: this.config.serverPort});
	this.socketServer.on('connection', function(client)
	{
		client.name = this.socketServer.clients.length;

		// console.log("kkk:", client.readyState, WebSocket.OPEN, client.upgradeReq.headers["sec-websocket-key"]);

		var msg = 'enter room!\n';
		client.send('[' + client.name + ']: ' + msg);
		this.broadcast(msg, client);
		
		client.on('message', function(data){
			this.broadcast(data, client);
		});

		client.on('close', function()
		{
			var msg = "leave room!"
			this.broadcast(msg, client);
		});

		client.on('error', function(e){
			console.log(e);
		});
	});

	this.socketServer.on('listening', function()
	{
		console.log('\u001B[31m[LOG]\u001B[0m: Socket service runing on ' + common.getLocalIp() + ':' + this.config.serverPort);
	}.bind(this));
}

GameServer.prototype.broadcast = function(message, client)
{
	var flag = Buffer.isBuffer(message);
	if (flag)
	{
		var str = message.toString();
		var arr = str.match(/Sec-WebSocket-Key: (.+)/);
		if (arr != null && arr.length > 1)
		{
			var key = arr[1];
			if (key != null)
			{
				handshake(key, client);
			}
		}
	}

	console.log(client.name, message);

	this.socketServer.clients.forEach(function each(cli) {
		if (client != cli && cli.readyState == WebSocket.OPEN)
		{
			cli.send('[' + cli.name + ']: ' + message)
		}
	});
}
