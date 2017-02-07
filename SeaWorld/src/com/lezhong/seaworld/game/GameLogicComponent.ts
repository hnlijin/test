/**
 *
 * @author 
 *
 */
class GameLogicComponent extends Component 
{
    private _ower: GameScene = null;
    private _netSevice:NetSevice = null;
    
    private static GAME_READY:number = 1;
    private static GAME_START:number = 2;
    
    private static ADD_PLAYER:number = 10;
    private static REMOVE_PALYER:number = 11;
    private static UPDATE_PLAYER:number = 12;
    private static UPDATE_FISH: number = 13;
	
    public constructor(ower:GameScene)
	{
        super();
        this._ower = ower;
        
        this._netSevice = this._ower.getComponent("net") as NetSevice;
        this._netSevice.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage, this);
	}
	
    private onReceiveMessage(evt:egret.ProgressEvent):void
    {
        var offset = 0;
        var byte = evt.data as egret.ByteArray;
        var packetId = byte.dataView.getUint8(offset);
        
        console.log("packetId:", packetId);
        
        switch(packetId)
        {   
            case GameLogicComponent.ADD_PLAYER: // add player : id, name
            {
                offset += 1;
                var id:number = byte.dataView.getUint8(offset);
                var name:string = "";
                offset += 1;
                var len = byte.dataView.getUint8(offset);
                offset += 1;
                for(var i = 0; i < len; i += 1) {
                    var charCode = byte.dataView.getUint16(i * 2 + offset, true);
                    if(charCode == 0) {
                        break;
                    }
                    name += String.fromCharCode(charCode);
                }
                
                console.log("add_player:", id, len, name);
                    
                var data = {};
                data["id"] = id;
                data["name"] = name;
                var gameObject = GameFactory.createGameObject(this._ower.map, data);
                this._ower.map.addGameObject(gameObject);
            }
            break;
            
            case GameLogicComponent.REMOVE_PALYER: // remove player : id
            {
                var id: number = byte.dataView.getUint8(offset += 1);
                
                console.log("remove_player:",id);
                
                if (id > 0) {
                    this._ower.map.removeGameObjectForId(id);
                }
            }
            break;
            
            case GameLogicComponent.UPDATE_PLAYER: // update player : len, id, x, y
            {
                var len: number = byte.dataView.getUint8(offset += 1);
                for (var i: number = 0; i < len; i += 1)
                {
                    var id: number = byte.dataView.getUint8(offset += 1);
                    var x: number = byte.dataView.getUint8(offset += 1);
                    var y: number = byte.dataView.getUint8(offset += 1);
                    
                    console.log("id:", id, x, y);
                    
                    if (id > 0) {
                        var gameObject: GameObject = this._ower.map.getGameObjectForId(id);
                        if (gameObject != null) {
                            gameObject.updatePosition(x, y);   
                        }
                    }
                }
            }
            break;
            
            case GameLogicComponent.UPDATE_FISH: // update fish
            {
                
            }
            break;
        }
    }
}
