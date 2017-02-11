var constants = require('./../constants')

function RemoveFish(player) {
    this.player = player;
}

module.exports = RemoveFish;

RemoveFish.prototype.build = function()
 {
    var buf = new ArrayBuffer(2);
    var view = new DataView(buf);

    view.setUint8(0, constants.REMOVE_FISH, true);
    view.setUint8(1, this.player.id);

    return buf;
};