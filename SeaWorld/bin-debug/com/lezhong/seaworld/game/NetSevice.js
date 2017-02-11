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
        console.log("Socket连接成功！");
    };
    p.onSocketClose = function (evt) {
        console.log("Socket连接断开！");
    };
    p.onSockeError = function (evt) {
        console.log("Socket连接出错！");
    };
    return NetSevice;
}(Component));
egret.registerClass(NetSevice,'NetSevice');
