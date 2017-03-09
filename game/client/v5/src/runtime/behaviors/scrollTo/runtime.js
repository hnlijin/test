var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ls;
(function (ls) {
    var ScrollToBehavior = (function (_super) {
        __extends(ScrollToBehavior, _super);
        function ScrollToBehavior() {
            return _super.call(this) || this;
        }
        ScrollToBehavior.prototype.onCreate = function () {
            this.isBounds = ls.eval_e(this.isBounds);
        };
        ScrollToBehavior.prototype.tick = function () {
            var now = egret.getTimer();
            var offx = 0;
            var offy = 0;
            if (now >= this._shakeStart && now < this._shakeEnd) {
                var mag = this._magnitude;
                if (this._mode === 1)
                    mag *= 1 - (now - this._shakeStart) / (this._shakeEnd - this._shakeStart);
                var r = Math.random() * Math.PI * 2;
                var d = Math.random() * mag;
                offx = Math.cos(r) * d;
                offy = Math.sin(r) * d;
            }
            var layer = this.inst.container.parent;
            if (this.isBounds) {
                var bounds = this.inst.getGlobalBounds();
                if (bounds.x < 0)
                    this.inst.x = this.inst.anchorOffsetX;
                else if (bounds.right > ls.GameUILayer.stage.stageWidth)
                    this.inst.x = ls.LayoutDecoder.sceneWidth - this.inst.anchorOffsetX;
                if (bounds.y < 0)
                    this.inst.y = this.inst.anchorOffsetY;
                else if (bounds.bottom > ls.GameUILayer.stage.stageHeight)
                    this.inst.y = ls.LayoutDecoder.sceneHeight - this.inst.anchorOffsetY;
            }
            ls.World.getInstance().sceneCamera.cameraLayer = layer;
            layer.lookAt((this.inst.x / (1 + offx)), (this.inst.y / (1 + offy)));
        };
        ScrollToBehavior.prototype.shake = function (magnitude, duration, mode) {
            this._magnitude = ls.eval_e(magnitude);
            this._duration = ls.eval_e(duration);
            this._mode = ls.eval_e(mode);
            this._shakeStart = egret.getTimer();
            this._shakeEnd = this._shakeStart + this._duration * 1000;
        };
        ScrollToBehavior.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            return o;
        };
        ScrollToBehavior.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        ScrollToBehavior.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            return bh;
        };
        return ScrollToBehavior;
    }(ls.BaseBehavior));
    ls.ScrollToBehavior = ScrollToBehavior;
    __reflect(ScrollToBehavior.prototype, "ls.ScrollToBehavior");
})(ls || (ls = {}));
