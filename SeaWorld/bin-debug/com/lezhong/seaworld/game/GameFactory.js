/**
 *
 * @author
 *
 */
var GameFactory = (function () {
    function GameFactory() {
    }
    var d = __define,c=GameFactory,p=c.prototype;
    GameFactory.createGameObject = function (map, data) {
        if (data != null) {
            var gameObject = new GameObject(map, data);
            gameObject.addComponent("view", new PlayerView(gameObject));
            return gameObject;
        }
        return null;
    };
    return GameFactory;
}());
egret.registerClass(GameFactory,'GameFactory');
