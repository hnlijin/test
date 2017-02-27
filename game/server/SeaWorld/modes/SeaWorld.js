var Mode = require('./../../modes/Mode');
var packet = require('./../packet');
var entity = require('./../entity');

function SeaWorld(gameServer) {
    this.gameServer = gameServer;
    this.ID = -1;
    this.name = "Sea World";
    this.players = [];
    this.ids = 0;
    this.speed = 5;
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
        var pos = this.getRandomPos()
        var fish = new entity.Fish(this.getID(), pos.x, pos.y)
        this.fishs.push(fish);
    }
}

SeaWorld.prototype.onClinetInit = function(client) {
    var len = this.fishs.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var addFish = new packet.AddFish(len);
        this.fishs.forEach(function each(fish) {
            addFish.addFish(fish)
        }.bind(this));
        client.sendPacket(addFish);
    }

    var len = this.players.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var addPlayer = new this.gameServer.packet.AddPlayer(len);
        this.players.forEach(function each(player) {
            addPlayer.addPlayer(player)
        }.bind(this));
        client.sendPacket(addPlayer);
    }
}

SeaWorld.prototype.onTick = function() {
    // Called on every game tick 
    var len = this.fishs.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var updateFish = new packet.UpdateFish(len);
        this.fishs.forEach(function each(fish) {
            fish.onUpdate(this);
            updateFish.addPlayer(fish);
        }.bind(this));
        this.gameServer.nofityClient(updateFish);
    }

    var len = this.players.length;
    if (len > 0 && this.gameServer.checkNofity()) {
        var removeFish = new packet.RemoveFish();
        var updatePlayer = new this.gameServer.packet.UpdatePlayer(len);
        this.players.forEach(function each(player) {
            player.onUpdate(this);
            updatePlayer.addPlayer(player);
            var collisionList = this.checkCollision(player)
            if (collisionList.length > 0) {
                removeFish.removeFish(collisionList, player)
                collisionList.forEach(function each(fish) {
                    var len = this.fishs.length;
                    var index = -1;
                    for (var i = 0; i < len; i++) {
                        if (fish == this.fishs[i]) {
                            index = i;
                            break;
                        }
                    }
                    console.log("kkk:index:", index);
                    if (index >= 0) {
                        this.fishs.splice(index, 1);
                    }
                }.bind(this));
            }
        }.bind(this));
        if (removeFish.getCount() > 0) {
            this.gameServer.nofityClient(removeFish);
        }
        this.gameServer.nofityClient(updatePlayer);
    }
}

SeaWorld.prototype.checkCollision = function(player) {
    var collisionList = []
    var len = this.fishs.length;
    if (len > 0) {
        this.fishs.forEach(function each(fish) {
            if (player.onCheckCollision(fish)) {
                player.eat(fish);
                collisionList.push(fish);
            }
        }.bind(this));
    }
    return collisionList;
}

SeaWorld.prototype.onPlayerInit = function(newPlayer) {
    this.players.push(newPlayer);

    if (this.gameServer.checkNofity()) {
        var addPlayer = new this.gameServer.packet.AddPlayer(1);
        addPlayer.addPlayer(newPlayer)
        this.gameServer.nofityClient(addPlayer);
    }
}

SeaWorld.prototype.onRemovePlayer = function(player) {
    this.players.splice(this.players.indexOf(player), 1);
    this.gameServer.nofityClient(new this.gameServer.packet.RemovePlayer(player));
}

SeaWorld.prototype.getID = function() {
    this.ids += 1;
    return this.ids;
}

SeaWorld.prototype.getRandomPos = function() {
    var x = Math.random() * this.screenWidth
    var y = Math.random() * this.screenHeight
    return {x: x, y: y};
}