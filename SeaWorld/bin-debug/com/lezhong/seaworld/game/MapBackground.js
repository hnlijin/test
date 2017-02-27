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
var MapBackground = (function (_super) {
    __extends(MapBackground, _super);
    function MapBackground() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStge, _this);
        return _this;
    }
    MapBackground.prototype.onAddToStge = function (evt) {
        this.stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
        this.onResize();
    };
    MapBackground.prototype.onStageResize = function (evt) {
        this.onResize();
    };
    MapBackground.prototype.onResize = function () {
        //        this.graphics.clear();
        //        this.graphics.beginFill(0x00FF00);
        //        this.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
        //        this.graphics.endFill();
    };
    return MapBackground;
}(egret.Sprite));
__reflect(MapBackground.prototype, "MapBackground");
//# sourceMappingURL=MapBackground.js.map