/**
 *
 * @author 
 *
 */
class NetSevice extends egret.EventDispatcher
{
    private webSocket: egret.WebSocket = null;
    
	public constructor(host:string, port:number)
	{
    	  super();
    	  
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSockeError,this);
        this.webSocket.connect(host, port);
	}
	
    private onReceiveMessage(evt: egret.ProgressEvent): void {
        var byteArray = new egret.ByteArray();
        this.webSocket.readBytes(byteArray);
        evt.data = byteArray;
        this.dispatchEvent(evt);
    }

    private onSocketOpen(evt: egret.Event): void {
        this.dispatchEvent(evt);
        console.log("Socket连接成功！");
    }

    private onSocketClose(evt: egret.Event): void {
        this.dispatchEvent(evt);
        console.log("Socket连接断开！");
    }

    private onSockeError(evt: egret.IOErrorEvent): void {
        this.dispatchEvent(evt);
        console.log("Socket连接出错！");
    }
    
    public joinGame(name:string):void
    {
        var arrayBuff = new ArrayBuffer(2 + name.length * 2);
        var byte = new egret.ByteArray(arrayBuff);
        byte.dataView.setUint8(0,1);
        byte.dataView.setUint8(1,name.length);
        for(var i = 0; i < name.length; i += 1) {
            byte.dataView.setUint16(i * 2 + 2, name.charCodeAt(i), true);
            console.log(i, i * 2 + 2, name.charCodeAt(i));
        }
        this.webSocket.writeBytes(byte);
    }
    
    public gameControl(x:number, y:number): void {
        var arrayBuff = new ArrayBuffer(3);
        var byte = new egret.ByteArray(arrayBuff);
        byte.dataView.setUint8(0,2);
        byte.dataView.setUint8(1,x);
        byte.dataView.setUint8(2,y);
        this.webSocket.writeBytes(byte);
    }
    
    public get connected():Boolean
    {
        return this.webSocket.connected;
    }
}
