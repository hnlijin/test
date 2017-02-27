var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject(map, da) {
        var _this = _super.call(this) || this;
        _this._map = null;
        _this._data = null;
        _this._components = {};
        _this._map = map;
        _this.data = da;
        return _this;
    }
    Object.defineProperty(GameObject.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.x = this._data["x"];
            this.y = this._data["y"];
            var view = this.getComponent("view");
            if (view != null) {
                view.updateView();
            }
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.addComponent = function (name, component) {
        this._components[name] = component;
        component.onEnter();
    };
    GameObject.prototype.getComponent = function (name) {
        return this._components[name];
    };
    GameObject.prototype.removeComponent = function (name) {
        var component = this._components[name];
        if (component != null) {
            component.onEixt();
            delete this._components[name];
        }
    };
    GameObject.prototype.removeAllComponent = function () {
        for (var name in this._components) {
            this.removeComponent(name);
        }
    };
    return GameObject;
}(egret.DisplayObjectContainer));
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map