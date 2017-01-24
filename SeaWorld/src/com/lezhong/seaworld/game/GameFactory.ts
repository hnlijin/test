/**
 *
 * @author 
 *
 */
class GameFactory {
	public constructor() {
	}
	
	public static createGameObject(map:GameMap, data:Object) 
	{
        if (data != null)
        {
            var gameObject: GameObject = new GameObject(map,data);
            gameObject.addComponent("view",new PlayerView(gameObject));
            return gameObject;
        }
        return null;
	}
}
