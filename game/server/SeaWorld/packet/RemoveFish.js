var constants = require('./../constants')

function RemoveFish() {
    this.count = 2;
    this.fishs = [];
}

module.exports = RemoveFish;

RemoveFish.prototype.removeFish = function(fs, player) {
    this.fishs.push({fishs:fs, player:player});
    this.count += fs.length * 4 + 7;
}

RemoveFish.prototype.getCount = function() {
    return this.fishs.length;
}

RemoveFish.prototype.build = function() {
    this.buf = new ArrayBuffer(this.count);
    this.view = new DataView(this.buf);
    this.offset = 0;
    this.view.setUint8(this.offset, constants.REMOVE_FISH, true);
    this.offset += 1;
    this.view.setUint8(this.offset, this.fishs.length, true);
    this.offset += 1;
    this.fishs.forEach(function each(item) {
        this.view.setUint32(this.offset, item.player.id)
        this.offset += 4;
        this.view.setUint16(this.offset, item.player.radius)
        this.offset += 2;
        this.view.setUint8(this.offset, item.fishs.length)
        this.offset += 1
        item.fishs.forEach(function each(fish) {
            this.view.setUint32(this.offset, fish.id);
            this.offset += 4;
        }.bind(this));
    }.bind(this));
    return this.buf;
};