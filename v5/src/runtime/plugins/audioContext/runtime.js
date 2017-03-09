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
    var AIAudioContext = (function (_super) {
        __extends(AIAudioContext, _super);
        function AIAudioContext() {
            var _this = _super.call(this) || this;
            _this.averageSpectrum = 0;
            _this._changedSpectrum = 0;
            _this._lastSpectrum = 0;
            _this._onFailureMessage = "";
            _this._showDebug = false;
            _this._audioContext = window['AudioContext'];
            return _this;
        }
        AIAudioContext.prototype.initialize = function () {
            var _this = this;
            if (!window || !window.navigator)
                return;
            navigator['getMedia'] = navigator.getUserMedia || navigator['webkitGetUserMedia'] || navigator['mozGetUserMedia'] || navigator['msGetUserMedia'];
            if (navigator['getMedia']) {
                try {
                    var a = void 0;
                    navigator['getMedia']({ audio: true }, this.onSuccess.bind(this), this.onFailure.bind(this));
                    this.container.addEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
                }
                catch (e) {
                    alert(e);
                }
            }
            else {
                egret.setTimeout(function () {
                    _this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, _this.onAudioContextSupport));
                }, this, 400);
            }
        };
        AIAudioContext.prototype.onSuccess = function (stream) {
            if (window['audioContextT'] === undefined) {
                window['audioContextT'] = new (this._audioContext || window['webkitAudioContext']);
            }
            this.mic = window['audioContextT'].createMediaStreamSource(stream);
            this.analyser = window['audioContextT'].createAnalyser();
            this.analyser.fftsize = 256;
            this.mic.connect(this.analyser);
            this.drawSpectrum();
        };
        AIAudioContext.prototype.onFailure = function (error) {
            this._onFailureMessage = 'constraintName:' + error.constraintName + "\nname:" + error.name + "\nmessage:" + error.message;
            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onGetMediaFailure));
        };
        AIAudioContext.prototype.onUpdate = function (event) {
            this.drawSpectrum();
        };
        AIAudioContext.prototype.drawSpectrum = function () {
            if (!this.analyser)
                return;
            var array = new Uint8Array(128);
            this.analyser.getByteFrequencyData(array);
            var totalSpectrum = 0;
            for (var i = 0, l = array.length; i < l; i++) {
                var value = array[i];
                totalSpectrum += value;
            }
            this.averageSpectrum = Math.ceil(totalSpectrum / 128);
            this._changedSpectrum = this.averageSpectrum - this._lastSpectrum;
            this._lastSpectrum = this.averageSpectrum;
        };
        AIAudioContext.prototype.onAudioContextSupport = function (event) {
            return { instances: [this], status: true };
        };
        AIAudioContext.prototype.onGetMediaFailure = function (event) {
            return { instances: [this], status: true };
        };
        Object.defineProperty(AIAudioContext.prototype, "currentAvarageSpectrum", {
            get: function () {
                return this.averageSpectrum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIAudioContext.prototype, "changedSpectrum", {
            get: function () {
                return this._changedSpectrum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIAudioContext.prototype, "lastAvarageSpectrum", {
            get: function () {
                return this._lastSpectrum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIAudioContext.prototype, "onFailureMessage", {
            get: function () {
                return this._onFailureMessage;
            },
            enumerable: true,
            configurable: true
        });
        return AIAudioContext;
    }(ls.AIDisplayObject));
    ls.AIAudioContext = AIAudioContext;
    __reflect(AIAudioContext.prototype, "ls.AIAudioContext");
    var OnAudioContextSupportEvent = (function (_super) {
        __extends(OnAudioContextSupportEvent, _super);
        function OnAudioContextSupportEvent() {
            return _super.apply(this, arguments) || this;
        }
        return OnAudioContextSupportEvent;
    }(ls.BaseEvent));
    ls.OnAudioContextSupportEvent = OnAudioContextSupportEvent;
    __reflect(OnAudioContextSupportEvent.prototype, "ls.OnAudioContextSupportEvent");
    var OnGetMediaFailureEvent = (function (_super) {
        __extends(OnGetMediaFailureEvent, _super);
        function OnGetMediaFailureEvent() {
            return _super.apply(this, arguments) || this;
        }
        return OnGetMediaFailureEvent;
    }(ls.BaseEvent));
    ls.OnGetMediaFailureEvent = OnGetMediaFailureEvent;
    __reflect(OnGetMediaFailureEvent.prototype, "ls.OnGetMediaFailureEvent");
})(ls || (ls = {}));
