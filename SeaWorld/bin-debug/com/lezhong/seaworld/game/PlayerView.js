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
var PlayerView = (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(gameObject) {
        var _this = _super.call(this) || this;
        _this.gameObject = gameObject;
        _this.view = new egret.Sprite();
        _this.gameObject.addChild(_this.view);
        _this.label = new egret.TextField();
        _this.label.textColor = 0x00ff00;
        _this.label.text = _this.gameObject.data["name"];
        _this.label.x = -_this.label.width / 2;
        _this.label.y = -_this.label.height / 2;
        _this.view.addChild(_this.label);
        return _this;
    }
    PlayerView.prototype.onEnter = function () {
        this.updateView();
    };
    PlayerView.prototype.updateView = function () {
        var radius = this.gameObject.data["radius"];
        this.view.graphics.clear();
        this.view.graphics.beginFill(0xff0000);
        this.view.graphics.drawCircle(0, 0, radius);
        this.view.graphics.endFill();
    };
    PlayerView.prototype.onExit = function () {
        this.view.graphics.clear();
        if (this.view.parent != null) {
            this.view.parent.removeChild(this.view);
        }
    };
    return PlayerView;
}(Component));
__reflect(PlayerView.prototype, "PlayerView");
//# sourceMappingURL=PlayerView.js.map