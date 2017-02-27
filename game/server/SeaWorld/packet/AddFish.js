var constants = require('./../constants')

function AddFish(count) {
    this.count = count;
    this.nameLen = 10;
    this.buf = new ArrayBuffer(2 + count * (this.nameLen * 2 + 12));
    this.view = new DataView(this.buf);
    this.offset = 0;
    this.view.setUint8(this.offset, constants.ADD_FISH, true);
    this.offset += 1;
    this.view.setUint8(this.offset, count, true);
    this.offset += 1;
}

module.exports = AddFish;

AddFish.prototype.addFish = function(fish) {
    if (this.count > 0) {
        var name = fish.name;
        this.view.setUint8(this.offset, fish.id);
        this.offset += 1;
        this.view.setUint16(this.offset, fish.radius);
        this.offset += 2;
        this.view.setUint8(this.offset, this.nameLen, true);
        this.offset += 1;
        for(var i = 0; i < this.nameLen; i += 1) {
            this.view.setUint16(this.offset, name.charCodeAt(i), true)
            this.offset += 2
        }
        this.view.setInt32(this.offset, fish.x);
        this.offset += 4;
        this.view.setInt32(this.offset, fish.y);
        this.offset += 4;
    }
}

AddFish.prototype.build = function() {
    return this.buf;
};