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
    var AIBrowser = (function (_super) {
        __extends(AIBrowser, _super);
        function AIBrowser() {
            var _this = _super.call(this) || this;
            _this.firstRequestFullscreen = true;
            _this._isSupportVibrate = false;
            _this.orientations = [
                "portrait",
                "landscape",
                "portrait-primary",
                "portrait-secondary",
                "landscape-primary",
                "landscape-secondary"
            ];
            if (AIBrowser._instance != null)
                throw new Error("AITouch为单例！！！");
            _this.name = "Browser";
            AIBrowser._instance = _this;
            return _this;
        }
        Object.defineProperty(AIBrowser, "instance", {
            get: function () {
                if (this._instance == null)
                    this._instance = new AIBrowser();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        AIBrowser.prototype.initialize = function () {
            var self = this;
            if (window.addEventListener) {
                window.addEventListener("resize", function () {
                    self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onResize));
                });
                if (typeof navigator.onLine !== "undefined") {
                    window.addEventListener("online", function () {
                        self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onOnline));
                    });
                    window.addEventListener("offline", function () {
                        self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onOffline));
                    });
                }
                if (typeof window.applicationCache !== "undefined") {
                    window.applicationCache.addEventListener("updateready", function () {
                    });
                    window.applicationCache.addEventListener("progress", function () {
                    });
                }
            }
        };
        AIBrowser.prototype.saveToJSON = function () {
            return _super.prototype.saveToJSON.call(this);
        };
        AIBrowser.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        Object.defineProperty(AIBrowser.prototype, "URL", {
            get: function () {
                if (window.location)
                    return window.location.toString();
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "protocol", {
            get: function () {
                if (window.location)
                    return window.location.protocol;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "host", {
            get: function () {
                if (window.location)
                    return window.location.host;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "hostname", {
            get: function () {
                if (window.location)
                    return window.location.hostname;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "port", {
            get: function () {
                if (window.location)
                    return window.location.port;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "pathname", {
            get: function () {
                if (window.location)
                    return window.location.pathname;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "hash", {
            get: function () {
                if (window.location)
                    return window.location.hash;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "Referer", {
            get: function () {
                if (window.document)
                    return window.document.referrer;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "Title", {
            get: function () {
                if (window.document)
                    return document.title;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "appName", {
            get: function () {
                if (window.navigator)
                    return navigator.appName;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "appVersion", {
            get: function () {
                if (window.navigator)
                    return window.navigator.appVersion;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "language", {
            get: function () {
                if (navigator && navigator.language)
                    return navigator.language;
                else
                    return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "queryString", {
            get: function () {
                if (window.location && window.location.search)
                    return window.location.search;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "screenWidth", {
            get: function () {
                if (window.screen)
                    return screen.width;
                return ls.GameUILayer.stage.stageWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "screenHeight", {
            get: function () {
                if (window.screen)
                    return screen.height;
                return ls.GameUILayer.stage.stageHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "platform", {
            get: function () {
                if (window.navigator && window.navigator && window.navigator.platform)
                    return navigator.platform;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBrowser.prototype, "isSupportVibrate", {
            get: function () {
                if (window.navigator) {
                    this._isSupportVibrate = window.navigator["vibrate"] || window.navigator["webkitVibrate"] || window.navigator["mozVibrate"] || window.navigator["msVibrate"];
                    return this._isSupportVibrate;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        AIBrowser.prototype.isCanSupportVibrated = function ($event) {
            return { instances: [this], status: this.isSupportVibrate };
        };
        AIBrowser.prototype.cookiesEnabled = function ($event) {
            if (window.navigator)
                return window.navigator ? { instances: [this], status: window.navigator.cookieEnabled } : { instances: [this], status: false };
            return { instances: [this], status: false };
        };
        AIBrowser.prototype.isOnline = function ($event) {
            if (window.navigator)
                return window.navigator ? { instances: [this], status: window.navigator.onLine } : { instances: [this], status: false };
            return { instances: [this], status: false };
        };
        AIBrowser.prototype.hasJava = function ($event) {
            if (window.navigator)
                return window.navigator ? { instances: [this], status: window.navigator.javaEnabled() } : { instances: [this], status: false };
            return { instances: [this], status: false };
        };
        AIBrowser.prototype.onOnline = function ($event) {
            return { instances: [this], status: true };
        };
        AIBrowser.prototype.onOffline = function ($event) {
            return { instances: [this], status: true };
        };
        AIBrowser.prototype.onResize = function ($event) {
            return { instances: [this], status: true };
        };
        AIBrowser.prototype.isFullscreen = function ($event) {
            return { instances: [this], status: !!(window.document && window.document["mozFullScreen"] || window.document && window.document["webkitIsFullScreen"] || window.document && window.document["fullScreen"]) };
        };
        AIBrowser.prototype.isPortraitLandscape = function (event) {
            return { instances: [this], status: ls.GameUILayer.orientation === ls.eval_e(event.orientaion) };
        };
        AIBrowser.prototype.supportsFullscreen = function (event) {
            if (document.getElementById) {
                var canvas = document.getElementById("gameDiv");
                if (canvas)
                    return { instances: [this], status: !!(canvas["requestFullscreen"] || canvas["mozRequestFullScreen"] || canvas["msRequestFullscreen"] || canvas["webkitRequestFullScreen"]) };
            }
            return { instances: [this], status: false };
        };
        AIBrowser.prototype.showAlert = function (message) {
            alert(message);
        };
        AIBrowser.prototype.closeWindow = function () {
            if (window.close)
                window.close();
        };
        AIBrowser.prototype.focus = function () {
            if (window.focus)
                window.focus();
        };
        AIBrowser.prototype.blur = function () {
            if (window.blur)
                window.blur();
        };
        AIBrowser.prototype.gotoURL = function (url, target) {
            var _target = parseInt(target);
            if (_target == 0) {
                if (window.location)
                    window.location.href = url;
            }
            else if (_target == 1) {
                if (window.parent && window.parent.location)
                    window.parent.location.href = url;
            }
            else {
                if (window.top && window.top.location)
                    window.top.location.href = url;
            }
        };
        AIBrowser.prototype.gotoURLWindow = function (url, tag) {
            setTimeout(function (url, tag) {
                if (window.open)
                    window.open(url, tag);
            }, 100, url, tag);
        };
        AIBrowser.prototype.reload = function () {
            if (window.location)
                window.location.reload();
        };
        AIBrowser.prototype.requestFullScreen = function () {
            if (window.document && window.document.getElementById) {
                var canvas = document.getElementById("gameDiv");
                if (canvas) {
                    if (this.firstRequestFullscreen) {
                        this.firstRequestFullscreen = false;
                        canvas.addEventListener("mozfullscreenerror", this.onFullscreenError);
                        canvas.addEventListener("webkitfullscreenerror", this.onFullscreenError);
                        canvas.addEventListener("MSFullscreenError", this.onFullscreenError);
                        canvas.addEventListener("fullscreenerror", this.onFullscreenError);
                    }
                    if (canvas["requestFullscreen"])
                        canvas["requestFullscreen"]();
                    else if (canvas["mozRequestFullScreen"])
                        canvas["mozRequestFullScreen"]();
                    else if (canvas["msRequestFullScreen"])
                        canvas["msRequestFullScreen"]();
                    else if (canvas["webkitRequestFullScreen"]) {
                    }
                }
            }
        };
        AIBrowser.prototype.cancelFullScreen = function () {
            if (window.document) {
                if (window.document["exitFullscreen"])
                    window.document["exitFullscreen"]();
                else if (window.document["mozCancelFullScreen"])
                    window.document["mozCancelFullScreen"]();
                else if (window.document["msExitFullscreen"])
                    window.document["msExitFullscreen"]();
                else if (window.document["webkitCancelFullScreen"])
                    window.document["webkitCancelFullScreen"]();
            }
        };
        AIBrowser.prototype.vibrate = function (pattern_) {
            try {
                pattern_ = "200,100,200";
                var arr = pattern_.split(",");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = parseInt(arr[i], 10);
                }
                if (window.navigator) {
                    if (window.navigator["vibrate"])
                        window.navigator["vibrate"](arr);
                    else if (window.navigator["mozVibrate"])
                        window.navigator["mozVibrate"](arr);
                    else if (window.navigator["webkitVibrate"])
                        window.navigator["webkitVibrate"](arr);
                    else if (window.navigator["msVibrate"])
                        window.navigator["msVibrate"](arr);
                }
            }
            catch (e) { }
        };
        AIBrowser.prototype.execJs = function (js_) {
            try {
                if (eval)
                    eval(js_);
            }
            catch (e) {
                if (console && console.error)
                    console.error("执行JS语句发生错误！！", e);
            }
        };
        AIBrowser.prototype.lockOrientation = function (o) {
            var o = ls.eval_e(o);
            o = Math.floor(o);
            if (o < 0 || o >= this.orientations.length)
                return;
            var orientation = this.orientations[o];
            if (screen["orientation"] && screen["orientation"]["lock"])
                screen["orientation"]["lock"](orientation);
            else if (screen["lockOrientation"])
                screen["lockOrientation"](orientation);
            else if (screen["webkitLockOrientation"])
                screen["webkitLockOrientation"](orientation);
            else if (screen["mozLockOrientation"])
                screen["mozLockOrientation"](orientation);
            else if (screen["msLockOrientation"])
                screen["msLockOrientation"](orientation);
        };
        AIBrowser.prototype.unLockOrientation = function () {
            if (screen["orientation"] && screen["orientation"]["unlock"])
                screen["orientation"]["unlock"]();
            else if (screen["unlockOrientation"])
                screen["unlockOrientation"]();
            else if (screen["webkitUnlockOrientation"])
                screen["webkitUnlockOrientation"]();
            else if (screen["mozUnlockOrientation"])
                screen["mozUnlockOrientation"]();
            else if (screen["msUnlockOrientation"])
                screen["msUnlockOrientation"]();
        };
        AIBrowser.prototype.onFullscreenError = function (error) {
        };
        return AIBrowser;
    }(ls.AIObject));
    ls.AIBrowser = AIBrowser;
    __reflect(AIBrowser.prototype, "ls.AIBrowser");
    var IsSupportVibrateEvent = (function (_super) {
        __extends(IsSupportVibrateEvent, _super);
        function IsSupportVibrateEvent() {
            return _super.call(this) || this;
        }
        return IsSupportVibrateEvent;
    }(ls.BaseEvent));
    ls.IsSupportVibrateEvent = IsSupportVibrateEvent;
    __reflect(IsSupportVibrateEvent.prototype, "ls.IsSupportVibrateEvent");
    var IsCookiesEnabledEvent = (function (_super) {
        __extends(IsCookiesEnabledEvent, _super);
        function IsCookiesEnabledEvent() {
            return _super.call(this) || this;
        }
        return IsCookiesEnabledEvent;
    }(ls.BaseEvent));
    ls.IsCookiesEnabledEvent = IsCookiesEnabledEvent;
    __reflect(IsCookiesEnabledEvent.prototype, "ls.IsCookiesEnabledEvent");
    var IsOnlineEvent = (function (_super) {
        __extends(IsOnlineEvent, _super);
        function IsOnlineEvent() {
            return _super.call(this) || this;
        }
        return IsOnlineEvent;
    }(ls.BaseEvent));
    ls.IsOnlineEvent = IsOnlineEvent;
    __reflect(IsOnlineEvent.prototype, "ls.IsOnlineEvent");
    var IsHasJavaEvent = (function (_super) {
        __extends(IsHasJavaEvent, _super);
        function IsHasJavaEvent() {
            return _super.call(this) || this;
        }
        return IsHasJavaEvent;
    }(ls.BaseEvent));
    ls.IsHasJavaEvent = IsHasJavaEvent;
    __reflect(IsHasJavaEvent.prototype, "ls.IsHasJavaEvent");
    var OnOnlineEvent = (function (_super) {
        __extends(OnOnlineEvent, _super);
        function OnOnlineEvent() {
            return _super.call(this) || this;
        }
        return OnOnlineEvent;
    }(ls.BaseEvent));
    ls.OnOnlineEvent = OnOnlineEvent;
    __reflect(OnOnlineEvent.prototype, "ls.OnOnlineEvent");
    var OnOfflineEvent = (function (_super) {
        __extends(OnOfflineEvent, _super);
        function OnOfflineEvent() {
            return _super.call(this) || this;
        }
        return OnOfflineEvent;
    }(ls.BaseEvent));
    ls.OnOfflineEvent = OnOfflineEvent;
    __reflect(OnOfflineEvent.prototype, "ls.OnOfflineEvent");
    var OnResizeEvent = (function (_super) {
        __extends(OnResizeEvent, _super);
        function OnResizeEvent() {
            return _super.call(this) || this;
        }
        return OnResizeEvent;
    }(ls.BaseEvent));
    ls.OnResizeEvent = OnResizeEvent;
    __reflect(OnResizeEvent.prototype, "ls.OnResizeEvent");
    var IsFullscreenEvent = (function (_super) {
        __extends(IsFullscreenEvent, _super);
        function IsFullscreenEvent() {
            return _super.call(this) || this;
        }
        return IsFullscreenEvent;
    }(ls.BaseEvent));
    ls.IsFullscreenEvent = IsFullscreenEvent;
    __reflect(IsFullscreenEvent.prototype, "ls.IsFullscreenEvent");
    var IsPortraitLandscapeEvent = (function (_super) {
        __extends(IsPortraitLandscapeEvent, _super);
        function IsPortraitLandscapeEvent() {
            return _super.call(this) || this;
        }
        return IsPortraitLandscapeEvent;
    }(ls.BaseEvent));
    ls.IsPortraitLandscapeEvent = IsPortraitLandscapeEvent;
    __reflect(IsPortraitLandscapeEvent.prototype, "ls.IsPortraitLandscapeEvent");
    var IsSupportFullscreenEvent = (function (_super) {
        __extends(IsSupportFullscreenEvent, _super);
        function IsSupportFullscreenEvent() {
            return _super.call(this) || this;
        }
        return IsSupportFullscreenEvent;
    }(ls.BaseEvent));
    ls.IsSupportFullscreenEvent = IsSupportFullscreenEvent;
    __reflect(IsSupportFullscreenEvent.prototype, "ls.IsSupportFullscreenEvent");
})(ls || (ls = {}));
