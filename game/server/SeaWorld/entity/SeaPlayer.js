var Player = require('./../../entity/Player');

function SeaPlayer(id, client) {
    Player.call(this, id, client);
    this.radius = 30;
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

SeaPlayer.prototype.onUpdate = function(mode) {
	this.x = this.x + this.sx;
    this.y = this.y + this.sy;
};

SeaPlayer.prototype.eat = function(entity) {
    this.radius += entity.radius;
}

SeaPlayer.prototype.onCheckCollision = function(entity) {
    if (entity.radius >= this.radius) {
        return false;
    }
    var d = Math.abs(Math.sqrt((entity.x - this.x) * (entity.x - this.x) + (entity.y - this.y) * (entity.y - this.y)));
    var d2 = this.radius + entity.radius;
    console.log("kkk:", this.x, this.y, entity.x, entity.y);
    console.log("kkk:", this.radius, entity.radius, d, d2);
    if (d < d2) {
        return true;
    }
	return false;
}