/**
 *
 * @author
 *
 */
var MapBackground = (function (_super) {
    __extends(MapBackground, _super);
    function MapBackground() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStge, this);
    }
    var d = __define,c=MapBackground,p=c.prototype;
    p.onAddToStge = function (evt) {
        this.stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
        this.onResize();
    };
    p.onStageResize = function (evt) {
        this.onResize();
    };
    p.onResize = function () {
        this.graphics.clear();
        this.graphics.beginFill(0x00FF00);
        this.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.graphics.endFill();
    };
    return MapBackground;
}(egret.Sprite));
egret.registerClass(MapBackground,'MapBackground');
//# sourceMappingURL=MapBackground.js.map