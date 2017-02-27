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
    
	public constructor(map:GameMap, da:Object)
	{
        super();
        
        this._map = map;
        this.data = da;
	}
    
    public set data(value:Object) {
        this._data = value;
        this.x = this._data["x"];
        this.y = this._data["y"];

        var view:PlayerView = this.getComponent("view") as PlayerView;
        if (view != null) {
            view.updateView();
        }
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
