
function AddPlayer(player) {
    this.player = player;
}

module.exports = AddPlayer;

AddPlayer.prototype.build = function()
 {
 	var name = this.player.name;
    var buf = new ArrayBuffer(3 + name.length * 2);
    var view = new DataView(buf);

    view.setUint8(0, 1, true);
    view.setUint8(1, this.player.id)
    view.setUint8(2, name.length, true);
    for(var i = 0; i < name.length; i += 1) {
        view.setUint16(i * 2 + 3, name.charCodeAt(i), true);
    }

    return buf;
};