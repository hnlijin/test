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
    var SolidBehaivor = (function (_super) {
        __extends(SolidBehaivor, _super);
        function SolidBehaivor() {
            return _super.call(this) || this;
        }
        SolidBehaivor.prototype.onCreate = function () {
            if (this.inst != null && this.enabled)
                this.inst.solidEnabeld = true;
            else
                this.inst.solidEnabeld = false;
        };
        SolidBehaivor.prototype.isSolidEnabled = function ($event) {
            return null;
        };
        SolidBehaivor.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            return o;
        };
        SolidBehaivor.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        SolidBehaivor.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            return bh;
        };
        return SolidBehaivor;
    }(ls.BaseBehavior));
    ls.SolidBehaivor = SolidBehaivor;
    __reflect(SolidBehaivor.prototype, "ls.SolidBehaivor");
})(ls || (ls = {}));
