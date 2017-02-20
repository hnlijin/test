var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var GameFactory = (function () {
    function GameFactory() {
    }
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
__reflect(GameFactory.prototype, "GameFactory");
