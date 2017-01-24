/**
 *
 * @author 
 *
 */
class NetSevice extends Component
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
        console.log("Socket连接成功！");
    }

    private onSocketClose(evt: egret.Event): void {
        console.log("Socket连接断开！");
    }

    private onSockeError(evt: egret.IOErrorEvent): void {
        console.log("Socket连接出错！");
    }
}
