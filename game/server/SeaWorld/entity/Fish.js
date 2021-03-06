var GameObject = require('./../../entity/GameObject');

function Fish(id, x, y) {
    this.id = id;
    this.name = "fish";
    this.sx = 0;
    this.sy = 0;
    this.x = x;
    this.y = y;
    this.radius = 10;
}

module.exports = Fish;
Fish.prototype = new GameObject();

Fish.prototype.onUpdate = function(mode) {
};

Fish.prototype.eat = function(entity) {
    this.radius += entity.radius;
}

Fish.prototype.onCheckCollision = function(entity) {
	return false;
}