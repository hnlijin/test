var Mode = require('./Mode');

function SeaWorld() {
    this.ID = 0;
    this.name = "Sea world";
    this.players = [];
    this.ids = 0;
}

module.exports = SeaWorld;
SeaWorld.prototype = new Mode();

SeaWorld.prototype.onTick = function(gameServer) {
    // Called on every game tick 
    var len = this.players.length;
    if (len > 0) {
        var updatePlayer = new gameServer.packet.UpdatePlayer(len);
        this.players.forEach(function each(player) {
            player.x += player.x + player.sx;
            player.y += player.y + player.sy;
            updatePlayer.addPlayer(player);
        }.bind(this));
        gameServer.nofityClient(updatePlayer);
    }
};

SeaWorld.prototype.addPlayer = function(newPlayer) {
    this.players.push(newPlayer);
}

SeaWorld.prototype.removePlayer = function(player) {
    this.players.splice(this.players.indexOf(player), 1);
}

SeaWorld.prototype.playerMove = function(player, speedx, speedy) {
}

SeaWorld.prototype.getID = function() {
    this.ids += 1;
    return this.ids;
}