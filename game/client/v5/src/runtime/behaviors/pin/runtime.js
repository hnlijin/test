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
    var PinBehavior = (function (_super) {
        __extends(PinBehavior, _super);
        function PinBehavior() {
            var _this = _super.apply(this, arguments) || this;
            _this._theirStartAngle = 0;
            return _this;
        }
        PinBehavior.prototype.tick = function () {
            if (!this._pinObject)
                return;
            if (this._lastKnownAngle !== this.inst.angle) {
                this._myStartAngle = ls.MathUtils.clampAngle(this._myStartAngle + (this.inst.angle - this._lastKnownAngle));
            }
            var newx = this.inst.x;
            var newy = this.inst.y;
            if (this._mode === 3 || this._mode === 4) {
                var dist = ls.MathUtils.distance(this.inst.x, this.inst.y, this._pinObject.x, this._pinObject.y);
                if ((dist > this._pinDist) || (this._mode === 4 && dist < this._pinDist)) {
                    var radian = ls.MathUtils.radianTo(this._pinObject.x, this._pinObject.y, this.inst.x, this.inst.y);
                    newx = this._pinObject.x + Math.cos(radian) * this._pinDist;
                    newy = this._pinObject.y + Math.sin(radian) * this._pinDist;
                }
            }
            else {
                var mergeRaian = ls.MathUtils.toRadian(this._pinObject.angle) + ls.MathUtils.toRadian(this._pinAngle);
                newx = this._pinObject.x + Math.cos(mergeRaian) * this._pinDist;
                newy = this._pinObject.y + Math.sin(mergeRaian) * this._pinDist;
            }
            var newangle = ls.MathUtils.clampAngle(this._myStartAngle + (this._pinObject.angle - this._theirStartAngle));
            this._lastKnownAngle = newangle;
            if ((this._mode === 0 || this._mode === 1 || this._mode === 3 || this._mode === 4) &&
                (this.inst.x != newx || this.inst.y != newy)) {
                this.inst.x = newx;
                this.inst.y = newy;
            }
            if ((this._mode == 0 || this._mode === 2) && (this.inst.angle != newangle)) {
                this.inst.angle = newangle;
            }
        };
        PinBehavior.prototype.isPinned = function ($event) {
            return { instances: [this.inst], status: !!this._pinObject };
        };
        PinBehavior.prototype.pin = function ($object, mode) {
            this._pinObject = $object;
            this._mode = ls.eval_e(mode);
            var otherinst = $object;
            this._pinObject = otherinst;
            this._pinAngle = ls.MathUtils.angleTo(otherinst.x, otherinst.y, this.inst.x, this.inst.y) - otherinst.angle;
            this._pinDist = ls.MathUtils.distance(this.inst.x, this.inst.y, this._pinObject.x, this._pinObject.y);
            this._myStartAngle = this.inst.angle;
            this._lastKnownAngle = this.inst.angle;
            this._theirStartAngle = otherinst.angle;
        };
        PinBehavior.prototype.unpin = function () {
            this._pinObject = null;
        };
        PinBehavior.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            return o;
        };
        PinBehavior.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        PinBehavior.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            return bh;
        };
        return PinBehavior;
    }(ls.BaseBehavior));
    ls.PinBehavior = PinBehavior;
    __reflect(PinBehavior.prototype, "ls.PinBehavior");
    var IsPinnedEvent = (function (_super) {
        __extends(IsPinnedEvent, _super);
        function IsPinnedEvent() {
            return _super.apply(this, arguments) || this;
        }
        return IsPinnedEvent;
    }(ls.BaseEvent));
    ls.IsPinnedEvent = IsPinnedEvent;
    __reflect(IsPinnedEvent.prototype, "ls.IsPinnedEvent");
})(ls || (ls = {}));
