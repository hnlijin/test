var qs = require('querystring'); // 参数解析库
var crypto = require('crypto');  // 加载crypto库
var os = require('os');
var WebSocket = require('ws');
var common = require('./common');
var GamePacketHandler = require('./GamePacketHandler')

function GameServer()
{
	this.config = {
		serverPort: 9001,
	};
}

module.exports = GameServer;

GameServer.prototype.start = function()
{
	this.socketServer = new WebSocket.Server({port: this.config.serverPort});
	this.socketServer.on('connection', function(client)
	{		
		client.packetHandler = new GamePacketHandler(this, client);
        client.on('message', client.packetHandler.handleMessage.bind(client.packetHandler));
		client.on('close', client.packetHandler.close.bind(client.packetHandler));
		client.on('error', client.packetHandler.close.bind(client.packetHandler));
	});

	this.socketServer.on('listening', function()
	{
		console.log('\u001B[31m[LOG]\u001B[0m: Game service runing on ' + common.getLocalIp() + ':' + this.config.serverPort);
	}.bind(this));
}