var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var Game = (function () {
    function Game() {
    }
    Game.prototype.startup = function (contentView, data) {
        var scene = new GameScene(contentView);
        scene.data = data;
        scene.setBackground(new MapBackground());
        scene.addComponent("net", new NetSevice(data["server_info"].host, data["server_info"].port));
        scene.addComponent("logic", new GameLogicComponent(scene));
        GameScene.currentScene = scene;
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
