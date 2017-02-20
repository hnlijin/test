var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
    Object.defineProperty(GameScene, "currentScene", {
        get: function () {
            return GameScene._currentScene;
        },
        set: function (scene) {
            GameScene._currentScene = scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScene.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.addComponent = function (name, component) {
        this._components[name] = component;
        component.onEnter();
    };
    GameScene.prototype.getComponent = function (name) {
        return this._components[name];
    };
    GameScene.prototype.removeComponent = function (name) {
        var component = this._components[name];
        if (component != null) {
            component.onEixt();
            delete this._components[name];
        }
    };
    GameScene.prototype.removeAllComponent = function () {
        for (var name in this._components) {
            this.removeComponent(name);
        }
    };
    Object.defineProperty(GameScene.prototype, "map", {
        get: function () {
            return this._gameMap;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.setBackground = function (background) {
        this._background.removeChildren();
        this._background.addChildAt(background, 0);
    };
    GameScene.prototype.getBackground = function () {
        return this._background;
    };
    return GameScene;
}());
GameScene._currentScene = null;
__reflect(GameScene.prototype, "GameScene");
