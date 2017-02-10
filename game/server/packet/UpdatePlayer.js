var constants = require('./constants')

function UpdatePlayer(playerCount) {
	this.playerCount = playerCount;
	this.buf = new ArrayBuffer(2 + playerCount * 9);
    this.view = new DataView(this.buf);
    this.offset = 0
    this.view.setUint8(this.offset, constants.UPDATE_PLAYER, true);
    this.offset += 1
    this.view.setUint8(this.offset, playerCount, true);
}

module.exports = UpdatePlayer;

UpdatePlayer.prototype.addPlayer = function(player) {
	if (this.playerCount > 0) {
		this.offset += 1;
		this.view.setUint8(this.offset, player.id)
		this.offset += 1;
		this.view.setInt32(this.offset, player.x)
		this.offset += 4;
		this.view.setInt32(this.offset, player.y)
	}
}

UpdatePlayer.prototype.build = function() {
    return this.buf;
};