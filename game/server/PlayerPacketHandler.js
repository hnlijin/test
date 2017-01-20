var packets = require('./packet/player');

function PlayerPacketHandler(gameServer, client) {
    this.gameServer = gameServer;
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
    var handler = packets[packetId];
    if (handler) {
        handler(this.gameServer, this.client, view);
    } else {
        console.log('\u001B[31m[WARNING]: [' + packetId + "] handler not found!\u001B[0m");
    }
};

PlayerPacketHandler.prototype.close = function()
{
}