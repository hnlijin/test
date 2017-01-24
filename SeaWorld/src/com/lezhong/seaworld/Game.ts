/**
 *
 * @author 
 *
 */
class Game {
	public constructor() {
	}
	
    public startup(contentView: egret.DisplayObjectContainer, data:Object):void
	{
	    var scene:GameScene = new GameScene(contentView);
	    scene.data = data;
	    scene.setBackground(new MapBackground());
        scene.addComponent("net",new NetSevice(data["server_info"].host,data["server_info"].port));
        scene.addComponent("logic",new GameLogicComponent(scene));
        GameScene.currentScene = scene;
	}
}
