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
var GameLogicComponent = (function (_super) {
    __extends(GameLogicComponent, _super);
    function GameLogicComponent(ower) {
        var _this = _super.call(this) || this;
        _this._ower = null;
        _this._netSevice = null;
        _this._ower = ower;
        _this._netSevice = _this._ower.getComponent("net");
        _this._netSevice.addEventListener(egret.ProgressEvent.SOCKET_DATA, _this.onReceiveMessage, _this);
        return _this;
    }
    GameLogicComponent.prototype.onReceiveMessage = function (evt) {
        var offset = 0;
        var byte = evt.data;
        var packetId = byte.dataView.getUint8(offset);
        offset += 1;
        console.log("packetId:", packetId);
        switch (packetId) {
            case GameLogicComponent.ADD_PLAYER:
                {
                    var count = byte.dataView.getUint8(offset);
                    offset += 1;
                    for (var i = 0; i < count; i++) {
                        var id = byte.dataView.getUint8(offset);
                        offset += 1;
                        var name = "";
                        var x = 0;
                        var y = 0;
                        var nameLen = byte.dataView.getUint8(offset);
                        offset += 1;
                        for (var j = 0; j < nameLen; j += 1) {
                            var charCode = byte.dataView.getUint16(offset, true);
                            offset += 2;
                            if (charCode > 0) {
                                name += String.fromCharCode(charCode);
                            }
                        }
                        x = byte.dataView.getInt32(offset);
                        offset += 4;
                        y = byte.dataView.getInt32(offset);
                        offset += 4;
                        console.log("add_player:", id, nameLen, name, x, y);
                        var data = {};
                        data["id"] = id;
                        data["name"] = name;
                        var gameObject = GameFactory.createGameObject(this._ower.map, data);
                        gameObject.updatePosition(x, y);
                        this._ower.map.addGameObject(gameObject);
                    }
                }
                break;
            case GameLogicComponent.UPDATE_PLAYER:
                {
                    var len = byte.dataView.getUint8(offset);
                    offset += 1;
                    for (var i = 0; i < len; i += 1) {
                        var id = byte.dataView.getUint8(offset);
                        offset += 1;
                        var x = byte.dataView.getInt32(offset);
                        offset += 4;
                        var y = byte.dataView.getInt32(offset);
                        offset += 4;
                        console.log("update_player:", i, id, x, y);
                        if (id > 0) {
                            var gameObject = this._ower.map.getGameObjectForId(id);
                            if (gameObject != null) {
                                gameObject.updatePosition(x, y);
                            }
                        }
                    }
                }
                break;
            case GameLogicComponent.REMOVE_PALYER:
                {
                    var id = byte.dataView.getUint8(offset);
                    offset += 1;
                    console.log("remove_player:", id);
                    if (id > 0) {
                        this._ower.map.removeGameObjectForId(id);
                    }
                }
                break;
            case GameLogicComponent.ADD_FISH:
                {
                    var count = byte.dataView.getUint8(offset);
                    offset += 1;
                    for (var i = 0; i < count; i++) {
                        var id = byte.dataView.getUint8(offset);
                        offset += 1;
                        var name = "";
                        var x = 0;
                        var y = 0;
                        var nameLen = byte.dataView.getUint8(offset);
                        offset += 1;
                        for (var j = 0; j < nameLen; j += 1) {
                            var charCode = byte.dataView.getUint16(offset, true);
                            offset += 2;
                            if (charCode > 0) {
                                name += String.fromCharCode(charCode);
                            }
                        }
                        x = byte.dataView.getInt32(offset);
                        offset += 4;
                        y = byte.dataView.getInt32(offset);
                        offset += 4;
                        console.log("add_fish:", i, "=>", id, nameLen, name, x, y, offset);
                        var data = {};
                        data["id"] = id;
                        data["name"] = name;
                        var gameObject = GameFactory.createGameObject(this._ower.map, data);
                        gameObject.updatePosition(x, y);
                        this._ower.map.addGameObject(gameObject);
                    }
                }
                break;
            case GameLogicComponent.UPDATE_FISH:
                {
                    var len = byte.dataView.getUint8(offset);
                    offset += 1;
                    for (var i = 0; i < len; i += 1) {
                        var id = byte.dataView.getUint8(offset);
                        offset += 1;
                        var x = byte.dataView.getInt32(offset);
                        offset += 4;
                        var y = byte.dataView.getInt32(offset);
                        offset += 4;
                        console.log("update_fish:", i, id, x, y);
                        if (id > 0) {
                            var gameObject = this._ower.map.getGameObjectForId(id);
                            if (gameObject != null) {
                                gameObject.updatePosition(x, y);
                            }
                        }
                    }
                }
                break;
            case GameLogicComponent.REMOVE_FISH:
                {
                    var id = byte.dataView.getUint8(offset);
                    offset += 1;
                    console.log("remove_fish:", id);
                    if (id > 0) {
                        this._ower.map.removeGameObjectForId(id);
                    }
                }
                break;
        }
    };
    return GameLogicComponent;
}(Component));
GameLogicComponent.GAME_READY = 1;
GameLogicComponent.GAME_START = 2;
GameLogicComponent.ADD_PLAYER = 10;
GameLogicComponent.REMOVE_PALYER = 11;
GameLogicComponent.UPDATE_PLAYER = 12;
GameLogicComponent.ADD_FISH = 20;
GameLogicComponent.UPDATE_FISH = 21;
GameLogicComponent.REMOVE_FISH = 22;
__reflect(GameLogicComponent.prototype, "GameLogicComponent");
