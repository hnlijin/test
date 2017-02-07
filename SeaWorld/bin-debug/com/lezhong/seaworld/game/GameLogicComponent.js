/**
 *
 * @author
 *
 */
var GameLogicComponent = (function (_super) {
    __extends(GameLogicComponent, _super);
    function GameLogicComponent(ower) {
        _super.call(this);
        this._ower = null;
        this._netSevice = null;
        this._ower = ower;
        this._netSevice = this._ower.getComponent("net");
        this._netSevice.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
    }
    var d = __define,c=GameLogicComponent,p=c.prototype;
    p.onReceiveMessage = function (evt) {
        var offset = 0;
        var byte = evt.data;
        var packetId = byte.dataView.getUint8(offset);
        console.log("packetId:", packetId);
        switch (packetId) {
            case GameLogicComponent.ADD_PLAYER:
                {
                    offset += 1;
                    var id = byte.dataView.getUint8(offset);
                    var name = "";
                    offset += 1;
                    var len = byte.dataView.getUint8(offset);
                    offset += 1;
                    for (var i = 0; i < len; i += 1) {
                        var charCode = byte.dataView.getUint16(i * 2 + offset, true);
                        if (charCode == 0) {
                            break;
                        }
                        name += String.fromCharCode(charCode);
                    }
                    console.log("add_player:", id, len, name);
                    var data = {};
                    data["id"] = id;
                    data["name"] = name;
                    var gameObject = GameFactory.createGameObject(this._ower.map, data);
                    this._ower.map.addGameObject(gameObject);
                }
                break;
            case GameLogicComponent.REMOVE_PALYER:
                {
                    var id = byte.dataView.getUint8(offset += 1);
                    console.log("remove_player:", id);
                    if (id > 0) {
                        this._ower.map.removeGameObjectForId(id);
                    }
                }
                break;
            case GameLogicComponent.UPDATE_PLAYER:
                {
                    var len = byte.dataView.getUint8(offset += 1);
                    for (var i = 0; i < len; i += 1) {
                        var id = byte.dataView.getUint8(offset += 1);
                        var x = byte.dataView.getUint8(offset += 1);
                        var y = byte.dataView.getUint8(offset += 1);
                        console.log("id:", id, x, y);
                        if (id > 0) {
                            var gameObject = this._ower.map.getGameObjectForId(id);
                            if (gameObject != null) {
                                gameObject.updatePosition(x, y);
                            }
                        }
                    }
                }
                break;
            case GameLogicComponent.UPDATE_FISH:
                {
                }
                break;
        }
    };
    GameLogicComponent.GAME_READY = 1;
    GameLogicComponent.GAME_START = 2;
    GameLogicComponent.ADD_PLAYER = 10;
    GameLogicComponent.REMOVE_PALYER = 11;
    GameLogicComponent.UPDATE_PLAYER = 12;
    GameLogicComponent.UPDATE_FISH = 13;
    return GameLogicComponent;
}(Component));
egret.registerClass(GameLogicComponent,'GameLogicComponent');
//# sourceMappingURL=GameLogicComponent.js.map