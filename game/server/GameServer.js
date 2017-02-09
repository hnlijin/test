var qs = require('querystring'); // 参数解析库
var crypto = require('crypto');  // 加载crypto库
var os = require('os');
var WebSocket = require('ws');
var common = require('./common');
var GamePacketHandler = require('./GamePacketHandler')
var Gamemode = require('./gamemodes');
var packet = require('./packet');

function GameServer()
{
	this.config = {
		serverPort: 9001,
		serverGamemode: 1,
		tickTime: 100,
	};

	this.packet = packet;
}

module.exports = GameServer;

GameServer.prototype.start = function()
{
	this.gameMode = Gamemode.get(this.config.serverGamemode);
	this.socketServer = new WebSocket.Server({port: this.config.serverPort}, this.startGame.bind(this));
	this.socketServer.on('connection', function(client)
	{		
		client.packetHandler = new GamePacketHandler(this, client);
		client.sendPacket = this.sendPacket.bind(client);
        client.on('message', client.packetHandler.handleMessage.bind(client.packetHandler));
		client.on('close', client.packetHandler.close.bind(client.packetHandler));
		client.on('error', client.packetHandler.close.bind(client.packetHandler));
	}.bind(this));

	this.socketServer.on('listening', function()
	{
		console.log('\u001B[31m[LOG]\u001B[0m: Game service runing on ' + common.getLocalIp() + ':' + this.config.serverPort);
	}.bind(this));
}

GameServer.prototype.startGame = function()
{
	this.gameMode.onServerInit(this);
	setInterval(this.mainLoop.bind(this), this.config.tickTime);
}

GameServer.prototype.gamemodeTick = function() {
    this.gameMode.onTick(this);
}

GameServer.prototype.mainLoop = function() {
	this.gamemodeTick()
}

GameServer.prototype.addPlayer = function(newClient) {
	var newPlayer = new Gamemode.Player(this.gameMode.getID(), newClient);
	newClient.updatePlayer = this.updatePlayer.bind(newPlayer); 
    this.gameMode.addPlayer(newPlayer);
    this.nofityClient(new this.packet.AddPlayer(newPlayer));
    return newPlayer;
}

GameServer.prototype.removePlayer = function(removeClient) {
	this.gameMode.players.forEach(function each(player) {
		if (player.client == removeClient) {
			this.nofityClient(new this.packet.RemovePlayer(player));
			this.gameMode.removePlayer(player);
			return;
		}
    }.bind(this));
}

GameServer.prototype.updatePlayer = function(sx, sy, gameServer) {
    this.sx = gameServer.gameMode.speed * sx / 100;
    this.sy = gameServer.gameMode.speed * sy / 100;
}

GameServer.prototype.nofityClient = function(packet) {
	this.socketServer.clients.forEach(function each(client) {
		client.sendPacket(packet);
	});
}

GameServer.prototype.checkNofity = function(packet) {
	return this.socketServer.clients.length > 0
}

GameServer.prototype.sendPacket = function(packet) {
    if (this.readyState == WebSocket.OPEN && packet.build) {
        try {
            this.send(packet.build(), {binary: true});
        } catch (e) {
            console.log("[Error] "+e);
            this.emit('close');
            this.removeAllListeners();
        }
    } else {
        this.emit('close');
        this.removeAllListeners();
    }
};