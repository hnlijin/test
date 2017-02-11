/**
 *
 * @author
 *
 */
var NetSevice = (function (_super) {
    __extends(NetSevice, _super);
    function NetSevice(host, port) {
        _super.call(this);
        this.webSocket = null;
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSockeError, this);
        this.webSocket.connect(host, port);
    }
    var d = __define,c=NetSevice,p=c.prototype;
    p.onReceiveMessage = function (evt) {
        var byteArray = new egret.ByteArray();
        this.webSocket.readBytes(byteArray);
        evt.data = byteArray;
        this.dispatchEvent(evt);
    };
    p.onSocketOpen = function (evt) {
        this.dispatchEvent(evt);
        console.log("Socket连接成功！");
    };
    p.onSocketClose = function (evt) {
        this.dispatchEvent(evt);
        console.log("Socket连接断开！");
    };
    p.onSockeError = function (evt) {
        this.dispatchEvent(evt);
        console.log("Socket连接出错！");
    };
    p.joinGame = function (name) {
        var arrayBuff = new ArrayBuffer(2 + name.length * 2);
        var byte = new egret.ByteArray(arrayBuff);
        byte.dataView.setUint8(0, 3);
        byte.dataView.setUint8(1, name.length);
        for (var i = 0; i < name.length; i += 1) {
            byte.dataView.setUint16(i * 2 + 2, name.charCodeAt(i), true);
            console.log(i, i * 2 + 2, name.charCodeAt(i));
        }
        this.webSocket.writeBytes(byte);
    };
    p.gameControl = function (x, y) {
        var arrayBuff = new ArrayBuffer(3);
        var byte = new egret.ByteArray(arrayBuff);
        byte.dataView.setUint8(0, 4);
        byte.dataView.setInt8(1, x);
        byte.dataView.setInt8(2, y);
        this.webSocket.writeBytes(byte);
    };
    d(p, "connected"
        ,function () {
            return this.webSocket.connected;
        }
    );
    return NetSevice;
}(egret.EventDispatcher));
egret.registerClass(NetSevice,'NetSevice');
//# sourceMappingURL=NetSevice.js.map