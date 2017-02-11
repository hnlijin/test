var handlers = require('./handlers')

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
    var handlerId = view.getUint8(0, true);
    var handler = handlers[handlerId];
    if (handler) {
        handler(this.gameServer, this.client, view);
    } else {
        console.log('\u001B[31m[WARNING]: [' + handlerId + "] handler not found!\u001B[0m");
    }
};

PlayerPacketHandler.prototype.close = function()
{
    this.gameServer.removePlayer(this.client);
}