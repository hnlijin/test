var constants = require('./../constants')

function RemovePlayer(player) {
    this.player = player;
}

module.exports = RemovePlayer;

RemovePlayer.prototype.build = function()
 {
    var buf = new ArrayBuffer(2);
    var view = new DataView(buf);

    view.setUint8(0, constants.REMOVE_PALYER, true);
    view.setUint8(1, this.player.id);

    return buf;
};