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
    var RotateBehaivor = (function (_super) {
        __extends(RotateBehaivor, _super);
        function RotateBehaivor() {
            var _this = _super.call(this) || this;
            _this._speed = 180;
            _this._acceleration = 0;
            return _this;
        }
        Object.defineProperty(RotateBehaivor.prototype, "acceleration", {
            get: function () {
                return this._acceleration;
            },
            set: function (acc) {
                var acc = ls.eval_e(acc);
                ls.assert(typeof acc !== "number", "RotateBehaivor acceleration parameter type incorrect!!");
                this._acceleration = acc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RotateBehaivor.prototype, "speed", {
            get: function () {
                return this._speed;
            },
            set: function (sp) {
                var sp = ls.eval_e(sp);
                ls.assert(typeof sp !== "number", "RotateBehaivor speed parameter type incorrect!!");
                this._speed = sp;
            },
            enumerable: true,
            configurable: true
        });
        RotateBehaivor.prototype.tick = function () {
            var dt = this.inst.dt;
            if (this._acceleration != 0)
                this._speed += this._acceleration * dt;
            if (this._speed != 0)
                this.inst.angle = ls.MathUtils.clampAngle(this.inst.angle += this._speed * dt);
        };
        RotateBehaivor.prototype.setEnabled = function (state) {
            var state = ls.eval_e(state);
            ls.assert(typeof state !== "number", "RotateBehaivor setEnabled parameter type incorrect!!");
            this.enabled = (state == 1);
        };
        RotateBehaivor.prototype.setAcceleration = function (acc) {
            this.acceleration = acc;
        };
        RotateBehaivor.prototype.setSpeed = function (speed) {
            this.speed = speed;
        };
        RotateBehaivor.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["speed"] = this.speed;
            o["acceleration"] = this.acceleration;
            return o;
        };
        RotateBehaivor.prototype.loadFromJSON = function (o) {
            if (o) {
                this._speed = o["speed"];
                this._acceleration = o["acceleration"];
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        RotateBehaivor.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            bh.speed = this.speed;
            bh.acceleration = this.acceleration;
            return bh;
        };
        return RotateBehaivor;
    }(ls.BaseBehavior));
    ls.RotateBehaivor = RotateBehaivor;
    __reflect(RotateBehaivor.prototype, "ls.RotateBehaivor");
})(ls || (ls = {}));
