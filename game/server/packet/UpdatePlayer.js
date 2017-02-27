var constants = require('./../constants')

function UpdatePlayer(count) {
	this.count = count;
	this.buf = new ArrayBuffer(2 + count * 11);
    this.view = new DataView(this.buf);
    this.offset = 0;
    this.view.setUint8(this.offset, constants.UPDATE_PLAYER, true);
    this.offset += 1;
    this.view.setUint8(this.offset, count, true);
    this.offset += 1;
}

module.exports = UpdatePlayer;

UpdatePlayer.prototype.addPlayer = function(player) {
	if (this.count > 0) {
		this.view.setUint8(this.offset, player.id);
		this.offset += 1;
		this.view.setUint16(this.offset, player.radius);
		this.offset += 2;
		this.view.setInt32(this.offset, player.x)
		this.offset += 4;
		this.view.setInt32(this.offset, player.y)
		this.offset += 4;
	}
}

UpdatePlayer.prototype.build = function() {
    return this.buf;
};