var packets = require('./packet/player');

function PlayerPacketHandler(gameServer, playerServer, client) {
    this.gameServer = gameServer;
    this.playerServer = playerServer;
    this.client = client;
}

module.exports = PlayerPacketHandler;

PlayerPacketHandler.prototype.handleMessage = function(message) 
{
    function stobuf(buf) 
    {
        var length = buf.length;
        var arrayBuf = new ArrayBuffer(length);
        var view = new Uint8Array(arrayBuf);

        for (var i = 0; i < length; i++) {
            view[i] = buf[i];
        }

        return view.buffer;
    }

    // Discard empty messages
    if (message.length == 0) {
        return;
    }

    var buffer = stobuf(message);
    var view = new DataView(buffer);
    var packetId = view.getUint8(0, true);
    var packet = packets[packetId];
    if (packet) {
        packet(this.gameServer, this.client, view);
    } else {
        console.log('\u001B[31m[WARNING]: [' + packetId + "] packet not found!\u001B[0m");
    }
};

PlayerPacketHandler.prototype.close = function()
{
    this.gameServer.removePlayer(this.client);
}