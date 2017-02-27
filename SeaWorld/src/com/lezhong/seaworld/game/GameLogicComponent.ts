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
    
    private static ADD_FISH:number = 20;
    private static UPDATE_FISH: number = 21;
    private static REMOVE_FISH: number = 22;
	
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
        offset += 1;
        
        console.log("packetId:", packetId);
        
        switch(packetId)
        {   
            case GameLogicComponent.ADD_PLAYER: // add player : id, radius, name
            {
                var count = byte.dataView.getUint8(offset);
                offset += 1
                for (var i:number = 0; i < count; i++)
                {
                    var id: number = byte.dataView.getUint8(offset);
                    offset += 1;
                    var radius:number = byte.dataView.getUint16(offset);
                    offset += 2;

                    var name: string = "";
                    var x:number = 0;
                    var y:number = 0;
                    
                    var nameLen = byte.dataView.getUint8(offset);
                    offset += 1;
                    for(var j = 0; j < nameLen; j += 1) {
                        var charCode = byte.dataView.getUint16(offset, true);
                        offset += 2
                        if(charCode > 0) {
                            name += String.fromCharCode(charCode);
                        }
                    }
                    
                    x = byte.dataView.getInt32(offset);
                    offset += 4;
                    y = byte.dataView.getInt32(offset);
                    offset += 4;

                    console.log("add_player:", id, nameLen, name, x, y);

                    var data = {};
                    data["id"] = id;
                    data["name"] = name;
                    data["radius"] = radius;
                    var gameObject = GameFactory.createGameObject(this._ower.map,data);
                    this._ower.map.addGameObject(gameObject);
                }
            }
            break;
            
            case GameLogicComponent.UPDATE_PLAYER: // update player : len, id, x, y
            {
                var len: number = byte.dataView.getUint8(offset);
                offset += 1;
                for (var i: number = 0; i < len; i += 1)
                {
                    var id: number = byte.dataView.getUint8(offset);
                    offset += 1;
                    var radius: number = byte.dataView.getUint16(offset);
                    offset += 2;
                    var x: number = byte.dataView.getInt32(offset);
                    offset += 4;
                    var y: number = byte.dataView.getInt32(offset);
                    offset += 4;
                    
                    console.log("update_player:", i, id, x, y);
                    
                    if (id > 0) {
                        var gameObject: GameObject = this._ower.map.getGameObjectForId(id);
                        if (gameObject != null) {
                            var data:{} = gameObject.data;
                            data["x"] = x;
                            data["y"] = y;
                            data["radius"] = radius;
                            gameObject.data = data;
                        }
                    }
                }
            }
            break;
            
            case GameLogicComponent.REMOVE_PALYER: // remove player : id
            {
                var id: number = byte.dataView.getUint8(offset);
                offset += 1;

                console.log("remove_player:",id);

                if(id > 0) {
                    this._ower.map.removeGameObjectForId(id);
                }
            }
            break;
            
            case GameLogicComponent.ADD_FISH:
            {
                var count = byte.dataView.getUint8(offset);
                offset += 1;
                
                for(var i: number = 0;i < count;i++) {
                    var id: number = byte.dataView.getUint8(offset);
                    offset += 1;
                    var radius:number = byte.dataView.getUint16(offset);
                    offset += 2;

                    var name: string = "";
                    var x: number = 0;
                    var y: number = 0;

                    var nameLen = byte.dataView.getUint8(offset);
                    offset += 1;
                    
                    for(var j = 0;j < nameLen;j += 1) {
                        var charCode = byte.dataView.getUint16(offset,true);
                        offset += 2;
                        if(charCode > 0) {
                            name += String.fromCharCode(charCode);
                        }
                    }

                    x = byte.dataView.getInt32(offset);
                    offset += 4;
                    y = byte.dataView.getInt32(offset);
                    offset += 4;

                    console.log("add_fish:", i, "=>", id, nameLen, name, x, y, offset);

                    var data = {};
                    data["id"] = id;
                    data["name"] = name;
                    data["radius"] = radius;

                    var gameObject = GameFactory.createGameObject(this._ower.map,data);
                    this._ower.map.addGameObject(gameObject);
                }
            }
            break;
            
            case GameLogicComponent.UPDATE_FISH: // update fish
            {
                var len: number = byte.dataView.getUint8(offset);
                offset += 1;
                for(var i: number = 0;i < len;i += 1) {
                    var id: number = byte.dataView.getUint8(offset);
                    offset += 1;
                    var radius: number = byte.dataView.getUint16(offset);
                    offset += 2;
                    var x: number = byte.dataView.getInt32(offset);
                    offset += 4;
                    var y: number = byte.dataView.getInt32(offset);
                    offset += 4;

                    console.log("update_fish:",i,id,x,y);

                    if(id > 0) {
                        var gameObject: GameObject = this._ower.map.getGameObjectForId(id);
                        if(gameObject != null) {
                            var data:{} = gameObject.data;
                            data["x"] = x;
                            data["y"] = y;
                            data["radius"] = radius;
                            gameObject.data = data;
                        }
                    }
                }
            }
            break;
            
            case GameLogicComponent.REMOVE_FISH: // remove fish : id
            {
                var count:number = byte.dataView.getUint8(offset);
                offset += 1;

                for (var i:number = 0; i < count; i++)
                {
                    var id: number = byte.dataView.getUint32(offset);
                    offset += 4;
                    var radius: number = byte.dataView.getUint16(offset);
                    offset += 2;
                    var len: number = byte.dataView.getUint8(offset);
                    offset += 1;

                    var gameObject: GameObject = this._ower.map.getGameObjectForId(id);
                    if (gameObject != null) {
                        var data:{} = gameObject.data;
                        data["radius"] = radius;
                        gameObject.data = data;
                    }

                    for (var j: number = 0; j < len; j++)
                    {
                        var fid: number = byte.dataView.getUint32(offset);
                        offset += 4;
                        if (fid > 0) {
                            this._ower.map.removeGameObjectForId(fid);
                        }
                    }
                }
            }
            break;
        }
    }
}
