/**
 *
 * @author
 *
 */
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject(map, data) {
        _super.call(this);
        this._map = null;
        this._data = null;
        this._components = {};
        this._map = map;
        this._data = data;
    }
    var d = __define,c=GameObject,p=c.prototype;
    p.updatePosition = function (posx, posy) {
        this.x = posx;
        this.y = posy;
    };
    d(p, "data"
        ,function () {
            return this._data;
        }
        ,function (value) {
            this._data = value;
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
    return GameObject;
}(egret.DisplayObjectContainer));
egret.registerClass(GameObject,'GameObject');
