var Mode = require('./../../modes/Mode');
var packet = require('./../packet');
var entity = require('./../entity');

function SeaWorld(gameServer, ID) {
    this.gameServer = gameServer;
    this.ID = ID;
    this.name = "Sea World";
    this.players = [];
    this.ids = 0;
    this.speed = 5;
    this.fishIds = 0;
    this.fishs = [];
    this.maxFish = 30;
    this.screenWidth = 1000;
    this.screenHeight = 1000;
}

module.exports = SeaWorld;
SeaWorld.prototype = new Mode();

SeaWorld.prototype.onServerInit = function() {
    this.gameServer.run = true;

    for (var i = 0; i < this.maxFish; i++) {
        var x, y = this.getRandomPos()
        var fish = new entity.Fish(this.getFishID(), x, y)
        this.fishs.push(fish);
    }
}

SeaWorld.prototype.onTick = function() {
    // Called on every game tick 
    var len = this.players.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var updatePlayer = new this.gameServer.packet.UpdatePlayer(len);
        this.players.forEach(function each(player) {
            player.onUpdate();
            updatePlayer.addPlayer(player);
        }.bind(this));
        this.gameServer.nofityClient(updatePlayer);
    }
}

SeaWorld.prototype.onPlayerInit = function(newPlayer) {
    this.players.push(newPlayer);

    var len = this.fishs.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var addFish = new packet.AddFish(len);
        this.fishs.forEach(function each(fish) {
            addFish.addFish(fish)
        }.bind(this));
        this.gameServer.nofityClient(addFish);
    }

    var len = this.players.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var addPlayer = new this.gameServer.packet.AddPlayer(len);
        this.players.forEach(function each(player) {
            addPlayer.addPlayer(player)
        }.bind(this));
        this.gameServer.nofityClient(addPlayer);
    }
}

SeaWorld.prototype.onRemovePlayer = function(player) {
    this.players.splice(this.players.indexOf(player), 1);
}

SeaWorld.prototype.getID = function() {
    this.ids += 1;
    return this.ids;
}

SeaWorld.prototype.getFishID = function() {
    this.fishIds += 1;
    return this.fishIds;
}

SeaWorld.prototype.getRandomPos = function() {
    var x = Math.random() * this.screenWidth
    var y = Math.random() * this.screenHeight
    return x, y
}