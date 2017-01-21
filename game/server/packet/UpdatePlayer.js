function UpdatePlayer(playerCount) {
	this.buf = new ArrayBuffer(1 + playerCount * 3);
    this.view = new DataView(this.buf);
    this.offset = 0
    this.view.setUint8(this.offset, 3, true);
}

module.exports = UpdatePlayer;

UpdatePlayer.prototype.addPlayer = function(player) {
	this.offset += 1;
	this.view.setUint8(this.offset, player.id)
	this.offset += 1;
	this.view.setUint8(this.offset, player.x)
	this.offset += 1;
	this.view.setUint8(this.offset, player.y)
}

UpdatePlayer.prototype.build = function() {
    return this.buf;
};