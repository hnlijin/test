var constants = require('./../constants')

function AddFish(fishCount) {
    this.fishCount = fishCount;
    this.buf = new ArrayBuffer(2 + fishCount * 9);
    this.view = new DataView(this.buf);
    this.offset = 0
    this.view.setUint8(this.offset, constants.ADD_FISH, true);
    this.offset += 1
    this.view.setUint8(this.offset, fishCount, true);
}

module.exports = AddFish;

AddFish.prototype.addFish = function(fish) {
    if (this.fishCount > 0) {
        this.offset += 1;
        this.view.setUint8(this.offset, fish.id)
        this.offset += 1;
        this.view.setInt32(this.offset, fish.x)
        this.offset += 4;
        this.view.setInt32(this.offset, fish.y)
    }
}

AddFish.prototype.build = function() {
    return this.buf;
};