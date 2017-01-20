var MasterServer = require('./MasterServer');
var GameServer = require('./GameServer');

// Init variables
var runMaster = true;
var showConsole = true;

var masterServer;
var gameServer;

gameServer = new GameServer();
gameServer.start();

masterServer = new MasterServer(gameServer);
masterServer.start();