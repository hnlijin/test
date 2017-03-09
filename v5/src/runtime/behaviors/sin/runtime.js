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
    var SinBehavior = (function (_super) {
        __extends(SinBehavior, _super);
        function SinBehavior() {
            var _this = _super.call(this) || this;
            _this._2pi = Math.PI * 2;
            _this._pi_2 = Math.PI / 2;
            _this._3pi_2 = (3 * Math.PI) / 2;
            return _this;
        }
        SinBehavior.prototype.onCreate = function () {
            this.active = ls.eval_e(this.active);
            this.movement = ls.eval_e(this.movement);
            this.wave = ls.eval_e(this.wave);
            this.period = ls.eval_e(this.period);
            this._source_period = this.period;
            this.periodRandom = ls.eval_e(this.periodRandom);
            this.period += this.periodRandom;
            this.periodOffset = ls.eval_e(this.periodOffset);
            this.periodOffsetRandom = ls.eval_e(this.periodOffsetRandom);
            this.magnitude = ls.eval_e(this.magnitude);
            this._source_magnitude = this.magnitude;
            this.magnitudeRandom = ls.eval_e(this.magnitudeRandom);
            if (this.period === 0) {
                this.i = 0;
            }
            else {
                this.i = (this.periodOffset / this.period) * this._2pi;
                this.i += ((Math.random() * this.periodOffsetRandom) / this.period) * this._2pi;
            }
            this.magnitude += Math.random() * this.magnitudeRandom;
            this._initialValue = 0;
            this._initialValue2 = 0;
            this._ratio = 0;
            this.init();
        };
        SinBehavior.prototype.init = function () {
            switch (this.movement) {
                case 0:
                    this._initialValue = this.inst.x;
                    break;
                case 1:
                    this._initialValue = this.inst.y;
                    break;
                case 2:
                    this._initialValue = this.inst.width;
                    this._ratio = this.inst.height / this.inst.width;
                    break;
                case 3:
                    this._initialValue = this.inst.width;
                    break;
                case 4:
                    this._initialValue = this.inst.height;
                    break;
                case 5:
                    this._initialValue = this.inst.angle;
                    break;
                case 6:
                    this._initialValue = this.inst.alpha;
                    break;
                case 7:
                    this._initialValue = 0;
                    break;
                case 8:
                    this._initialValue = this.inst.x;
                    this._initialValue2 = this.inst.y;
                    break;
                default:
                    ls.assert(true, "无效的sine类型！！");
                    break;
            }
            this._lastKnownValue = this._initialValue;
            this._lastKnownValue2 = this._initialValue2;
        };
        SinBehavior.prototype.tick = function () {
            if (this.active === 0)
                return;
            var dt = 1 / 60;
            if (this.period === 0)
                this.i = 0;
            else {
                this.i += (dt / this.period) * this._2pi;
                this.i = this.i % this._2pi;
            }
            switch (this.movement) {
                case 0:
                    if (this.inst.x !== this._lastKnownValue)
                        this._initialValue += this.inst.x - this._lastKnownValue;
                    this.inst.x = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    this._lastKnownValue = this.inst.x;
                    break;
                case 1:
                    if (this.inst.y != this._lastKnownValue)
                        this._initialValue += this.inst.y - this._lastKnownValue;
                    this.inst.y = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    this._lastKnownValue = this.inst.y;
                    break;
                case 2:
                    this.inst.width = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    this.inst.height = this.inst.width * this._ratio;
                    break;
                case 3:
                    this.inst.width = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    break;
                case 4:
                    this.inst.height = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    break;
                case 5:
                    if (this.inst.angle !== this._lastKnownValue)
                        this._initialValue = this._initialValue + (this.inst.angle - this._lastKnownValue);
                    this.inst.angle = this._initialValue + this.waveFunc(this.i) * this.magnitude;
                    this._lastKnownValue = this.inst.angle;
                    break;
                case 6:
                    this.inst.alpha = this._initialValue + (this.waveFunc(this.i) * this.magnitude) / 100;
                    if (this.inst.alpha < 0)
                        this.inst.alpha = 0;
                    if (this.inst.alpha > 1)
                        this.inst.alpha = 1;
                    break;
                case 8:
                    if (this.inst.x !== this._lastKnownValue)
                        this._initialValue += this.inst.x - this._lastKnownValue;
                    if (this.inst.y !== this._lastKnownValue2)
                        this._initialValue2 += this.inst.y - this._lastKnownValue2;
                    var radian = ls.MathUtils.toRadian(this.inst.angle);
                    this.inst.x = this._initialValue + Math.cos(radian) * this.waveFunc(this.i) * this.magnitude;
                    this.inst.y = this._initialValue2 + Math.sin(radian) * this.waveFunc(this.i) * this.magnitude;
                    this._lastKnownValue = this.inst.x;
                    this._lastKnownValue2 = this.inst.y;
                    break;
            }
        };
        SinBehavior.prototype.waveFunc = function (x) {
            x = ls.eval_e(x);
            switch (this.wave) {
                case 0:
                    return Math.sin(x);
                case 1:
                    if (x < this._pi_2)
                        return x / this._pi_2;
                    else if (x <= this._3pi_2)
                        return 1 - (2 * (x - this._pi_2) / Math.PI);
                    else
                        return (x - this._3pi_2) / this._pi_2 - 1;
                case 2:
                    return 2 * x / this._2pi - 1;
                case 3:
                    return -2 * x / this._2pi + 1;
                case 4:
                    return x < Math.PI ? -1 : 1;
            }
            return 0;
        };
        SinBehavior.prototype.isActive = function ($event) {
            return { instances: [this.inst], status: this.active };
        };
        SinBehavior.prototype.compareMovement = function ($event) {
            return { instances: [this.inst], status: this.movement == ls.eval_e($event.movement) };
        };
        SinBehavior.prototype.comparePeriod = function ($event) {
            return { instances: [this.inst], status: ls.compare(this.period, $event.operationType, $event.value) };
        };
        SinBehavior.prototype.compareMagnitude = function ($event) {
            return { instances: [this.inst], status: ls.compare(this.period, $event.operationType, $event.value) };
        };
        SinBehavior.prototype.compareWave = function ($event) {
            return { instances: [this.inst], status: this.wave == ls.eval_e($event.wave) };
        };
        SinBehavior.prototype.setActive = function (active) {
            this.active = ls.eval_e(active);
        };
        SinBehavior.prototype.setPeriod = function (period) {
            this.period = ls.eval_e(period);
        };
        SinBehavior.prototype.setMagnitude = function (magnitude) {
            this.magnitude = ls.eval_e(magnitude);
        };
        SinBehavior.prototype.setMovement = function (movement) {
            this.movement = ls.eval_e(this.movement);
            this.init();
        };
        SinBehavior.prototype.setWave = function (wave) {
            this.wave = ls.eval_e(this.wave);
        };
        SinBehavior.prototype.setPhase = function (x) {
            x = ls.eval_e(x);
            this.i = (x * this._2pi) % this._2pi;
        };
        SinBehavior.prototype.updateInitialState = function () {
            this.init();
        };
        Object.defineProperty(SinBehavior.prototype, "cyclePosition", {
            get: function () {
                return Math.floor(this.i / this._2pi);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SinBehavior.prototype, "value", {
            get: function () {
                return Math.floor(this.waveFunc(this.i) * this.magnitude);
            },
            enumerable: true,
            configurable: true
        });
        SinBehavior.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o.active = this.active;
            o.movement = this.movement;
            o.wave = this.wave;
            o.period = this._source_period;
            o.periodRandom = this.periodRandom;
            o.periodOffset = this.periodOffset;
            o.periodOffsetRandom = this.periodOffsetRandom;
            o.magnitude = this._source_magnitude;
            o.magnitudeRandom = this.magnitudeRandom;
            return o;
        };
        SinBehavior.prototype.loadFromJSON = function (o) {
            if (o) {
                this.active = o.active;
                this.movement = o.movement;
                this.wave = o.wave;
                this.period = o.period;
                this.periodRandom = o.periodRandom;
                this.periodOffset = o.periodOffset;
                this.periodOffsetRandom = o.periodOffsetRandom;
                this.magnitude = o.magnitude;
                this.magnitudeRandom = o.magnitudeRandom;
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        SinBehavior.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            bh.active = this.active;
            bh.movement = this.movement;
            bh.wave = this.wave;
            bh.period = this._source_period;
            bh.periodRandom = this.periodRandom;
            bh.periodOffset = this.periodOffset;
            bh.periodOffsetRandom = this.periodOffsetRandom;
            bh.magnitude = this._source_magnitude;
            bh.magnitudeRandom = this.magnitudeRandom;
            return bh;
        };
        return SinBehavior;
    }(ls.BaseBehavior));
    ls.SinBehavior = SinBehavior;
    __reflect(SinBehavior.prototype, "ls.SinBehavior");
    var SinIsActiveEvent = (function (_super) {
        __extends(SinIsActiveEvent, _super);
        function SinIsActiveEvent() {
            return _super.apply(this, arguments) || this;
        }
        return SinIsActiveEvent;
    }(ls.BaseEvent));
    ls.SinIsActiveEvent = SinIsActiveEvent;
    __reflect(SinIsActiveEvent.prototype, "ls.SinIsActiveEvent");
    var SinCompareMovementEvent = (function (_super) {
        __extends(SinCompareMovementEvent, _super);
        function SinCompareMovementEvent() {
            return _super.apply(this, arguments) || this;
        }
        return SinCompareMovementEvent;
    }(ls.BaseEvent));
    ls.SinCompareMovementEvent = SinCompareMovementEvent;
    __reflect(SinCompareMovementEvent.prototype, "ls.SinCompareMovementEvent");
    var SinComparePeriodEvent = (function (_super) {
        __extends(SinComparePeriodEvent, _super);
        function SinComparePeriodEvent() {
            return _super.apply(this, arguments) || this;
        }
        return SinComparePeriodEvent;
    }(ls.BaseEvent));
    ls.SinComparePeriodEvent = SinComparePeriodEvent;
    __reflect(SinComparePeriodEvent.prototype, "ls.SinComparePeriodEvent");
    var SinCompareMagnitudeEvent = (function (_super) {
        __extends(SinCompareMagnitudeEvent, _super);
        function SinCompareMagnitudeEvent() {
            return _super.apply(this, arguments) || this;
        }
        return SinCompareMagnitudeEvent;
    }(ls.BaseEvent));
    ls.SinCompareMagnitudeEvent = SinCompareMagnitudeEvent;
    __reflect(SinCompareMagnitudeEvent.prototype, "ls.SinCompareMagnitudeEvent");
    var SinCompareWaveEvent = (function (_super) {
        __extends(SinCompareWaveEvent, _super);
        function SinCompareWaveEvent() {
            return _super.apply(this, arguments) || this;
        }
        return SinCompareWaveEvent;
    }(ls.BaseEvent));
    ls.SinCompareWaveEvent = SinCompareWaveEvent;
    __reflect(SinCompareWaveEvent.prototype, "ls.SinCompareWaveEvent");
})(ls || (ls = {}));
