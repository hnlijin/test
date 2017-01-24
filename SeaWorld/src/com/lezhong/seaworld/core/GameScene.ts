/**
 *
 * @author 
 *
 */
class GameScene 
{
    private static _currentScene:GameScene = null;
    public static set currentScene(scene:GameScene) {
        GameScene._currentScene = scene;
    }
    public static get currentScene():GameScene {
        return GameScene._currentScene;
    }
    
    private _background: egret.DisplayObjectContainer = null;
    private _gameMap:GameMap = null;
    private _ui:egret.DisplayObjectContainer = null;
    private _tip:egret.DisplayObjectContainer = null;
    
    private _components:Object = {};
    private _data:Object = null;
    
    public constructor(contentView: egret.DisplayObjectContainer)
	{
        this._background = new egret.DisplayObjectContainer();
        this._gameMap = new GameMap();
        this._ui = new egret.DisplayObjectContainer();
        this._tip = new egret.DisplayObjectContainer();
        
        contentView.addChild(this._background);
        contentView.addChild(this._gameMap);
        contentView.addChild(this._ui);
        contentView.addChild(this._tip);
	}
	
	public set data(data:Object)
	{
	    this._data = data;
	}
	
	public get data():Object
	{
	    return this._data;
	}
	
    public addComponent(name: string,component: Component): void {
        this._components[name] = component;
        component.onEnter();
    }

    public getComponent(name: string): Component {
        return this._components[name];
    }

    public removeComponent(name: string): void {
        var component: Component = this._components[name];
        if(component != null) {
            component.onEixt();
            delete this._components[name];
        }
    }
    
    public removeAllComponent(): void {
        for(var name in this._components) {
            this.removeComponent(name);
        }
    }
    
    public get map():GameMap
    {
        return this._gameMap;
    }
    
    public setBackground(background:egret.DisplayObject)
    {
        this._background.removeChildren();
        this._background.addChildAt(background, 0);
    }
    
    public getBackground():egret.DisplayObject
    {
        return this._background;
    }
}
