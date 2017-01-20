var MasterServer = require('./server/MasterServer');
var GameServer = require('./server/GameServer');
var PlayerServer = require('./server/PlayerServer');

// Init variables
var runMaster = true;

var masterServer;
var gameServer;
var playerServer;

if (runMaster)
{
	gameServer = new GameServer();
	gameServer.start();

	playerServer = new PlayerServer(gameServer);
	playerServer.start()

	masterServer = new MasterServer(gameServer, playerServer);
	masterServer.start();
}