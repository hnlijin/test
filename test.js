var net = require('net');
var crypto = require('crypto');  // 加载crypto库

var WS = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
var chatServer = net.createServer(),
	clientList = [];

chatServer.on('connection', function(client)
{
	client.name = client.remoteAddress + ":" + client.remotePort;
	var msg = '[' + client.name + '] : enter room!\n';
	if (client.writable)
	{
		client.write(msg);	
	}
	
	broadcast(msg, client);

	clientList.push(client);
	
	client.on('data', function(data){
		broadcast(data, client);
	});

	client.on('end', function()
	{
		clientList.splice(clientList.indexOf(client), 1);
	});

	client.on('error', function(e){
		console.log(e);
	});
});

function handshake(key, socket)
{
	if (socket.writable)
	{
		var acceptKey = crypto.createHash("sha1").update(key + WS).digest('base64')
		console.log("key2:", key, WS, acceptKey)
		socket.write('HTTP/1.1 101 Switching Protocols\r\n');
	    socket.write('Upgrade: websocket\r\n');
	    socket.write('Connection: Upgrade\r\n');
	    socket.write('Sec-WebSocket-Accept: ' + acceptKey + '\r\n');
		socket.write('\r\n');
	}
}

function broadcast(message, client)
{
	var flag = Buffer.isBuffer(message);
	if (flag)
	{
		var str = message.toString();
		console.log("[CLIENT_MESSAGE]: ", str);
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
	else
	{
		console.log("[CLIENT_MESSAGE]: ", message);
	}

	var cleanup = [];

	for(var i = 0; i < clientList.length; i += 1)
	{
		if (client != clientList[i])
		{
			if (clientList[i].writable)
			{
				console.log("[CLIENT_MESSAGE]: ", client.name, message);
				clientList[i].write('[' + client.name + '] says: ' + message)
			}
			else
			{
				cleanup.push(clientList[i]);
				clientList[i].destory();
			}
		}
	}

	for(i = 0; i < cleanup.length; i += 1)
	{
		clientList.splice(clientList.indexOf(cleanup[i]), i);
	}
}

chatServer.listen(9000);


// lua test
// function HUDLayer:testSocket()
// 	local socket = require("socket")
// 	local host = "10.0.33.163"
// 	local port = 9000
// 	self.c = assert(socket.connect(host, port))
// 	self.c:settimeout(0)

// 	self:timer("onSocketTimer", 0.05, false)
// end

// function HUDLayer:onSocketTimer(dt)
// 	local s, status, partial = self.c:receive()
// 	if status == "closed" then
// 		self:untimer("onSocketTimer")
// 		self.c:close()
// 	else
// 		print("msg: ", s)
// 	end
// end