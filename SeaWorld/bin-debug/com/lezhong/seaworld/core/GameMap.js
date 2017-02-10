/**
 *
 * @author
 *
 */
var GameMap = (function (_super) {
    __extends(GameMap, _super);
    function GameMap() {
        _super.call(this);
        this._map = {};
    }
    var d = __define,c=GameMap,p=c.prototype;
    p.addGameObject = function (gameObject) {
        var id = gameObject.data["id"];
        this.addChild(gameObject);
        this._map[id] = gameObject;
    };
    p.removeGameObject = function (gameObject) {
        var id = gameObject.data["id"];
        gameObject.removeAllComponent();
        this.removeChild(gameObject);
        delete this._map[id];
    };
    p.removeGameObjectForId = function (id) {
        var gameObject = this._map[id];
        if (gameObject != null) {
            this.removeGameObject(gameObject);
        }
    };
    p.getGameObjectForId = function (id) {
        return this._map[id];
    };
    p.removeAllGameObject = function () {
        var id = 0;
        for (var key in this._map) {
            id = parseInt(key);
            console.log(id, typeof (id));
            this.removeGameObjectForId(id);
        }
    };
    return GameMap;
}(egret.DisplayObjectContainer));
egret.registerClass(GameMap,'GameMap');
