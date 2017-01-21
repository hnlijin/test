function Player(id, client) {
    this.id = id;
    this.name = "fish";
    this.client = client;
    this.sx = 2;
    this.sy = 2;
    this.x = 0;
    this.y = 0;
}

module.exports = Player;