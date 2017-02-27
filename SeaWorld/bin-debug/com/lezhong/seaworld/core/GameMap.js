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
var GameMap = (function (_super) {
    __extends(GameMap, _super);
    function GameMap() {
        var _this = _super.call(this) || this;
        _this._map = {};
        return _this;
    }
    GameMap.prototype.addGameObject = function (gameObject) {
        var id = gameObject.data["id"];
        this.addChild(gameObject);
        this._map[id] = gameObject;
    };
    GameMap.prototype.removeGameObject = function (gameObject) {
        var id = gameObject.data["id"];
        gameObject.removeAllComponent();
        this.removeChild(gameObject);
        delete this._map[id];
    };
    GameMap.prototype.removeGameObjectForId = function (id) {
        var gameObject = this._map[id];
        if (gameObject != null) {
            this.removeGameObject(gameObject);
        }
    };
    GameMap.prototype.getGameObjectForId = function (id) {
        return this._map[id];
    };
    GameMap.prototype.removeAllGameObject = function () {
        var id = 0;
        for (var key in this._map) {
            id = parseInt(key);
            console.log(id, typeof (id));
            this.removeGameObjectForId(id);
        }
    };
    return GameMap;
}(egret.DisplayObjectContainer));
__reflect(GameMap.prototype, "GameMap");
//# sourceMappingURL=GameMap.js.map