function GameObject(id) {
    this.id = id;
    this.name = "unkown";
}

module.exports = GameObject;
GameObject.prototype = {};

GameObject.prototype.onUpdate = function() {
};