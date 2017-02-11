var constants = require('./../constants')

function AddPlayer(count) {
    this.count = count;
    this.nameLen = 10;
    this.buf = new ArrayBuffer(2 + count * (this.nameLen * 2 + 10));
    this.view = new DataView(this.buf);
    this.offset = 0
    this.view.setUint8(this.offset, constants.ADD_PLAYER, true);
    this.offset += 1
    this.view.setUint8(this.offset, count, true);
}

module.exports = AddPlayer;

AddPlayer.prototype.addPlayer = function(player) {
    if (this.count > 0) {
        var name = player.name;
        this.offset += 1;
        this.view.setUint8(this.offset, player.id);
        this.offset += 1
        this.view.setUint8(this.offset, this.nameLen, true);
        this.offset += 1
        for(var i = 0; i < this.nameLen / 5; i += 1) {
            console.log("kkk:", this.offset)
            this.view.setUint16(this.offset += i * 2, name.charCodeAt(i), true)
        }
        this.offset += 1;
        this.view.setInt32(this.offset, player.x);
        this.offset += 4;
        this.view.setInt32(this.offset, player.y);
    }
}

AddPlayer.prototype.build = function() {
    return this.buf;
};