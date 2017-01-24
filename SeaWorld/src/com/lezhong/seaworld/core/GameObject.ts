/**
 *
 * @author 
 *
 */
class GameObject extends egret.DisplayObjectContainer 
{
    private _map: GameMap = null;
    private _data: Object = null;
    private _components: Object = {};
    
	public constructor(map:GameMap, data:Object)
	{
        super();
        
        this._map = map;
        this._data = data;
	}

    public updatePosition(posx:number, posy:number):void
    {
        this.x = posx;
        this.y = posy;
    }
    
    public set data(value:Object) {
        this._data = value;
    }
	
	public get data():Object
	{
	    return this._data;
	}
	
    public addComponent(name: string,component: Component): void {
        this._components[name] = component;
        component.onEnter();
    }
    
    public getComponent(name:string):Component
    {
        return this._components[name];
    }

    public removeComponent(name: string): void {
        var component:Component = this._components[name];
        if (component != null) {
            component.onEixt();
            delete this._components[name];
        }
    }
    
    public removeAllComponent():void {
        for (var name in this._components) {
            this.removeComponent(name);
        }
    }
}
