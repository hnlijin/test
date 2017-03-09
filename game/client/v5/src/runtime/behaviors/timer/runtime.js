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
    var TimerBehavior = (function (_super) {
        __extends(TimerBehavior, _super);
        function TimerBehavior() {
            return _super.call(this) || this;
        }
        TimerBehavior.prototype.onCreate = function () {
            this._timers = {};
        };
        TimerBehavior.prototype.tick = function () {
            for (var key in this._timers) {
                var timer = this._timers[key];
                if (timer.isRunning) {
                    var currentTime = egret.getTimer();
                    if (currentTime - timer.oldtime > timer.duration) {
                        if (timer.repeatCount == 0 || timer.runtimes < timer.repeatCount) {
                            timer.runtimes++;
                        }
                        else {
                            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onTimerComplete, { tag: key }));
                            delete this._timers[timer.tag];
                        }
                        this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onTimer, { tag: key }));
                        timer.isOnTimer = true;
                        timer.oldtime = currentTime;
                    }
                }
            }
        };
        TimerBehavior.prototype.onTimer = function ($event) {
            return { instances: [this.inst], status: $event.getStatus("tag") };
        };
        TimerBehavior.prototype.onTimerComplete = function ($event) {
            return { instances: [this.inst], status: $event.getStatus("tag") };
        };
        TimerBehavior.prototype.startTimer = function (duration, repeatCount, tag) {
            if (!tag)
                ls.assert(true, "计时器标签名不能为空！！！！");
            duration = ls.eval_e(duration);
            repeatCount = ls.eval_e(repeatCount);
            var timer = this._timers[tag];
            if (!timer) {
                timer = { tag: tag, duration: duration, repeatCount: repeatCount, runtimes: 0, oldtime: egret.getTimer(), isRunning: true, isOnTimer: false };
                this._timers[tag] = timer;
            }
        };
        TimerBehavior.prototype.stopTimer = function (tag) {
            if (!tag)
                ls.assert(true, "计时器标签名不能为空！！！！");
            var timer = this._timers[tag];
            if (timer) {
                timer.runtimes = 0;
                timer.isRunning = true;
                timer.oldtime = Number.MIN_VALUE;
                delete this._timers[tag];
            }
        };
        TimerBehavior.prototype.resetTimer = function (tag) {
            if (!tag)
                ls.assert(true, "计时器标签名不能为空！！！！");
            var timer = this._timers[tag];
            if (timer) {
                timer.runtimes = 0;
                timer.isRunning = true;
                timer.oldtime = Number.MIN_VALUE;
            }
        };
        TimerBehavior.prototype.parseTimer = function (tag) {
            if (!tag)
                ls.assert(true, "计时器标签名不能为空！！！！");
            var timer = this._timers[tag];
            if (timer) {
                timer.isRunning = false;
            }
        };
        TimerBehavior.prototype.resumeTimer = function (tag) {
            if (!tag)
                ls.assert(true, "计时器标签名不能为空！！！！");
            var timer = this._timers[tag];
            if (timer) {
                timer.isRunning = true;
            }
        };
        TimerBehavior.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            return o;
        };
        TimerBehavior.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        TimerBehavior.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            return bh;
        };
        return TimerBehavior;
    }(ls.BaseBehavior));
    ls.TimerBehavior = TimerBehavior;
    __reflect(TimerBehavior.prototype, "ls.TimerBehavior");
    var TimerOnTimerEvent = (function (_super) {
        __extends(TimerOnTimerEvent, _super);
        function TimerOnTimerEvent() {
            return _super.apply(this, arguments) || this;
        }
        return TimerOnTimerEvent;
    }(ls.BaseEvent));
    ls.TimerOnTimerEvent = TimerOnTimerEvent;
    __reflect(TimerOnTimerEvent.prototype, "ls.TimerOnTimerEvent");
    var TimerOnTimerCompleteEvent = (function (_super) {
        __extends(TimerOnTimerCompleteEvent, _super);
        function TimerOnTimerCompleteEvent() {
            return _super.apply(this, arguments) || this;
        }
        return TimerOnTimerCompleteEvent;
    }(ls.BaseEvent));
    ls.TimerOnTimerCompleteEvent = TimerOnTimerCompleteEvent;
    __reflect(TimerOnTimerCompleteEvent.prototype, "ls.TimerOnTimerCompleteEvent");
})(ls || (ls = {}));
