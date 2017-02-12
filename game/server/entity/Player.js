var GameObject = require('./GameObject');

function Player(id, client) {
    this.id = id;
    this.name = client.name;
    this.client = client;
    this.sx = 0;
    this.sy = 0;
    this.x = 0;
    this.y = 0;
    this.speed = 10;
    this.score = 0;
}

module.exports = Player;
Player.prototype = new GameObject();

Player.prototype.onUpdateSpeed = function(sx, sy) {
	this.sx = this.speed * sx / 100;
    this.sy = this.speed * sy / 100;
}

Player.prototype.onUpdateName = function(name) {
    this.name = name;
}

Player.prototype.onUpdate = function(gameServer) {
	this.x = this.x + this.sx;
    this.y = this.y + this.sy;
};