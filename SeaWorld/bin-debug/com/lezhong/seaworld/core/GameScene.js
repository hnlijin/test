/**
 *
 * @author
 *
 */
var GameScene = (function () {
    function GameScene(contentView) {
        this._background = null;
        this._gameMap = null;
        this._ui = null;
        this._tip = null;
        this._components = {};
        this._data = null;
        this._background = new egret.DisplayObjectContainer();
        this._gameMap = new GameMap();
        this._ui = new egret.DisplayObjectContainer();
        this._tip = new egret.DisplayObjectContainer();
        contentView.addChild(this._background);
        contentView.addChild(this._gameMap);
        contentView.addChild(this._ui);
        contentView.addChild(this._tip);
    }
    var d = __define,c=GameScene,p=c.prototype;
    d(GameScene, "currentScene"
        ,function () {
            return GameScene._currentScene;
        }
        ,function (scene) {
            GameScene._currentScene = scene;
        }
    );
    d(p, "data"
        ,function () {
            return this._data;
        }
        ,function (data) {
            this._data = data;
        }
    );
    p.addComponent = function (name, component) {
        this._components[name] = component;
        component.onEnter();
    };
    p.getComponent = function (name) {
        return this._components[name];
    };
    p.removeComponent = function (name) {
        var component = this._components[name];
        if (component != null) {
            component.onEixt();
            delete this._components[name];
        }
    };
    p.removeAllComponent = function () {
        for (var name in this._components) {
            this.removeComponent(name);
        }
    };
    d(p, "map"
        ,function () {
            return this._gameMap;
        }
    );
    p.setBackground = function (background) {
        this._background.removeChildren();
        this._background.addChildAt(background, 0);
    };
    p.getBackground = function () {
        return this._background;
    };
    GameScene._currentScene = null;
    return GameScene;
}());
egret.registerClass(GameScene,'GameScene');
