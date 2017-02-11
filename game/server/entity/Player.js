var GameObject = require('./GameObject');

function Player(id, client) {
    this.id = id;
    this.name = "Player";
    this.client = client;
    this.sx = 0;
    this.sy = 0;
    this.x = 0;
    this.y = 0;
}

module.exports = Player;
Player.prototype = new GameObject();

Player.prototype.onUpdate = function(gameServer) {
	this.x = this.x + this.sx;
    this.y = this.y + this.sy;
};