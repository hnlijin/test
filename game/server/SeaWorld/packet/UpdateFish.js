var constants = require('./../constants')

function UpdateFish(count) {
    this.count = count;
    this.buf = new ArrayBuffer(2 + count * 9);
    this.view = new DataView(this.buf);
    this.offset = 0;
    this.view.setUint8(this.offset, constants.UPDATE_FISH, true);
    this.offset += 1;
    this.view.setUint8(this.offset, count, true);
    this.offset += 1;
}

module.exports = UpdateFish;

UpdateFish.prototype.addPlayer = function(fish) {
    if (this.count > 0) {
        this.view.setUint8(this.offset, fish.id);
        this.offset += 1;
        this.view.setInt32(this.offset, fish.x);
        this.offset += 4;
        this.view.setInt32(this.offset, fish.y);
        this.offset += 4;
    }
}

UpdateFish.prototype.build = function() {
    return this.buf;
};