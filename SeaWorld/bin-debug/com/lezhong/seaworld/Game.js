/**
 *
 * @author
 *
 */
var Game = (function () {
    function Game() {
    }
    var d = __define,c=Game,p=c.prototype;
    p.startup = function (contentView, data) {
        var scene = new GameScene(contentView);
        scene.data = data;
        scene.setBackground(new MapBackground());
        scene.addComponent("net", new NetSevice(data["server_info"].host, data["server_info"].port));
        scene.addComponent("logic", new GameLogicComponent(scene));
        GameScene.currentScene = scene;
    };
    return Game;
}());
egret.registerClass(Game,'Game');
