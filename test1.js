var qs = require('querystring'); // 参数解析库
var os = require('os');
var WebSocket = require('ws');
var crypto = require('crypto');  // 加载crypto库

var WS = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
var webServer = new WebSocket.Server({port: 9000});

webServer.on('connection', function(client)
{
	client.name = webServer.clients.length;

	// console.log("kkk:", client.readyState, WebSocket.OPEN, client.upgradeReq.headers["sec-websocket-key"]);

	var msg = 'enter room!\n';
	client.send('[' + client.name + ']: ' + msg);
	broadcast(msg, client);

	console.log("client length:", webServer.clients.length);

	client.on("upgrade", function(req, client, upgradeHead) {
		var key = req.headers['sec-websocket-key']
		handshake(key, client);
	});
	
	client.on('message', function(data){
		broadcast(data, client);
	});

	client.on('close', function()
	{
		var msg = "leave room!"
		broadcast(msg, client);
	});

	client.on('error', function(e){
		console.log(e);
	});
});

webServer.on('headers', function(messages) {
});

console.log("runing on " + getLocalIp());

function handshake(key, client)
{
	if (client.writable)
	{
		var acceptKey = crypto.createHash("sha1").update(key + WS).digest('base64')
		client.write('HTTP/1.1 101 Switching Protocols\r\n');
	    client.write('Upgrade: websocket\r\n');
	    client.write('Connection: Upgrade\r\n');
	    client.write('Sec-WebSocket-Accept: ' + acceptKey + '\r\n');
		client.write('\r\n');
	}
}

function broadcast(message, client)
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

	webServer.clients.forEach(function each(client2) {
		if (client != client2 && client2.readyState == WebSocket.OPEN)
		{
			client2.send('[' + client2.name + ']: ' + message)
		}
	});
}

function getLocalIp()
{
	var IPv4 = "127.0.0.1";
	for(var i=0;i<os.networkInterfaces().en0.length;i++){  
	    if(os.networkInterfaces().en0[i].family=='IPv4'){  
	        IPv4=os.networkInterfaces().en0[i].address;  
	    }  
	} 
	return IPv4;
}