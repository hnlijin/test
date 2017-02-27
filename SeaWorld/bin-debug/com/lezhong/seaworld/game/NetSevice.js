var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var NetSevice = (function (_super) {
    __extends(NetSevice, _super);
    function NetSevice(host, port) {
        var _this = _super.call(this) || this;
        _this.webSocket = null;
        _this.webSocket = new egret.WebSocket();
        _this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        _this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, _this.onReceiveMessage, _this);
        _this.webSocket.addEventListener(egret.Event.CONNECT, _this.onSocketOpen, _this);
        _this.webSocket.addEventListener(egret.Event.CLOSE, _this.onSocketClose, _this);
        _this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onSockeError, _this);
        _this.webSocket.connect(host, port);
        return _this;
    }
    NetSevice.prototype.onReceiveMessage = function (evt) {
        var byteArray = new egret.ByteArray();
        this.webSocket.readBytes(byteArray);
        evt.data = byteArray;
        this.dispatchEvent(evt);
    };
    NetSevice.prototype.onSocketOpen = function (evt) {
        console.log("Socket连接成功！");
    };
    NetSevice.prototype.onSocketClose = function (evt) {
        console.log("Socket连接断开！");
    };
    NetSevice.prototype.onSockeError = function (evt) {
        console.log("Socket连接出错！");
    };
    return NetSevice;
}(Component));
__reflect(NetSevice.prototype, "NetSevice");
//# sourceMappingURL=NetSevice.js.map