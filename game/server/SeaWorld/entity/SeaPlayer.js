var Player = require('./../../entity/Player');

function SeaPlayer(id, client) {
    Player.call(this, id, client);
}

module.exports = SeaPlayer;
SeaPlayer.prototype = Player.prototype;
SeaPlayer.prototype.constructor = SeaPlayer;

SeaPlayer.prototype.onUpdateSpeed = function(sx, sy) {
	this.sx = this.speed * sx / 100;
    this.sy = this.speed * sy / 100;
}

SeaPlayer.prototype.onUpdateName = function(name) {
    this.name = name;
}

SeaPlayer.prototype.onUpdate = function(gameServer) {
	this.x = this.x + this.sx;
    this.y = this.y + this.sy;
};