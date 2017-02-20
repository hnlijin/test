var constants = require('./../constants')

function RemoveFish() {
    this.count = 0;
    this.fishs = [];
}

module.exports = RemoveFish;

RemoveFish.prototype.removeFish = function(fishs, targetId) {
    this.fishs.push({fishs:fishs, targetId:targetId});
}

RemoveFish.prototype.getCount = function() {
    return this.fishs.length;
}

RemoveFish.prototype.build = function() {
    this.buf = new ArrayBuffer(5 + count * 8);
    this.view = new DataView(this.buf);
    this.offset = 0;
    this.view.setUint8(this.offset, constants.REMOVE_FISH, true);
    this.offset += 1;
    this.view.setUint32(this.offset, count, true);
    this.offset += 4;
    this.fishs.forEach(function each(item) {
        var fishs = item.fishs;
        fishs.forEach(function each(fish) {
            this.view.setUint32(this.offset, fish.id);
            this.offset += 4;
            this.view.setUint32(this.offset, item.targetId);
            this.offset += 4;
        }.bind(this));
    }.bind(this));
    return this.buf;
};