/**
 *
 * @author 
 *
 */
class GameMap extends egret.DisplayObjectContainer
{
    private _map:Object = {};

	public constructor() {
        super();
    }
    
    public addGameObject(gameObject:GameObject):void
    {
        var id:number = gameObject.data["id"]
        this.addChild(gameObject);
        this._map[id] = gameObject;
    }
    
    public removeGameObject(gameObject:GameObject):void
    {
        var id:number = gameObject.data["id"]
        gameObject.removeAllComponent();
        this.removeChild(gameObject);
        delete this._map[id]
    }
    
    public removeGameObjectForId(id:number):void
    {
        var gameObject:GameObject = this._map[id];
        if(gameObject != null) {
            this.removeGameObject(gameObject);
        }
    }
    
    public getGameObjectForId(id:number):GameObject
    {
        return this._map[id];
    }

    public removeAllGameObject():void
    {
        var id:number = 0;
        for (var key in this._map)
        {
            id = parseInt(key);
            console.log(id, typeof(id));
            this.removeGameObjectForId(id);
        }
    }
}
