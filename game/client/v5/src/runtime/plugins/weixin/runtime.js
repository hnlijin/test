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
    var AIWeiXin = (function (_super) {
        __extends(AIWeiXin, _super);
        function AIWeiXin() {
            var _this = _super.call(this) || this;
            if (AIWeiXin._instance != null) {
                throw new Error("AISystem 为单例！！！");
            }
            _this.name = "Weixin";
            return _this;
        }
        Object.defineProperty(AIWeiXin, "instance", {
            get: function () {
                if (this._instance == null)
                    this._instance = new AIWeiXin();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        AIWeiXin.prototype.initialize = function () {
            this.prevUrl = window.location.href;
            var searchIndex = this.prevUrl.lastIndexOf("/");
            this.prevUrl = this.prevUrl.slice(0, searchIndex + 1);
            this.weixinSDK = new WeixinSDK();
            this.weixinSDK.debug = this.weixinDebug;
            this.weixinSDK.signUrl = this.weixinSignUrl;
            this.weixinSDK.initialize();
            this.setShareTimeline(this.title, this.link, this.imgUrl);
            this.setShareAppMessage(this.title, this.desc, this.link, this.imgUrl);
            this.setShareQQ(this.title, this.desc, this.link, this.imgUrl);
            this.setShareWeiBoMessage(this.title, this.desc, this.link, this.imgUrl);
            this.setShareQZone(this.title, this.desc, this.link, this.imgUrl);
            var self = this;
            this.weixinSDK.onTimelineTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineTrigger));
            };
            this.weixinSDK.onTimelineCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineCancel));
            };
            this.weixinSDK.onTimelineSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineSuccess));
            };
            this.weixinSDK.onTimelineFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineFail));
            };
            this.weixinSDK.onAppMessageTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageTrigger));
            };
            this.weixinSDK.onAppMessageCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageCancel));
            };
            this.weixinSDK.onAppMessageSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageSuccess));
            };
            this.weixinSDK.onAppMessageFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageFail));
            };
            this.weixinSDK.onQQTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQTrigger));
            };
            this.weixinSDK.onQQCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQCancel));
            };
            this.weixinSDK.onQQSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQSuccess));
            };
            this.weixinSDK.onQQFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQFail));
            };
            this.weixinSDK.onWeiBoTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoTrigger));
            };
            this.weixinSDK.onWeiBoCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoCancel));
            };
            this.weixinSDK.onWeiBoSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoSuccess));
            };
            this.weixinSDK.onWeiBoFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoFail));
            };
            this.weixinSDK.onQZoneTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneTrigger));
            };
            this.weixinSDK.onQZoneCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneCancel));
            };
            this.weixinSDK.onQZoneSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneSuccess));
            };
            this.weixinSDK.onQZoneFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneFail));
            };
        };
        AIWeiXin.prototype.weixinTimelineTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinTimelineCancel = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinTimelineSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinTimelineFail = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareAppMessageTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareAppMessageCancel = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareAppMessageSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareAppMessageFail = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQQTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQQCancel = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQQSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQQFail = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareTXWeiBoTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareTXWeiBoCancel = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareTXWeiBoSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareTXWeiBoFail = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQZoneTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQZoneCancel = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQZoneSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        AIWeiXin.prototype.weixinShareQZoneFail = function ($event) {
            return { instances: [this], status: true };
        };
        Object.defineProperty(AIWeiXin.prototype, "imagePrevUrl", {
            get: function () {
                var _imagePrevUrl = this.prevUrl.split('#')[0];
                _imagePrevUrl = _imagePrevUrl.split('?')[0];
                var searchIndex = _imagePrevUrl.lastIndexOf("/");
                _imagePrevUrl = _imagePrevUrl.slice(0, searchIndex + 1);
                return _imagePrevUrl;
            },
            enumerable: true,
            configurable: true
        });
        AIWeiXin.prototype.setShareTimeline = function ($title, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareTimeline() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareTimeline为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareTimeline().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareTimeline().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareTimeline().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("朋友圈图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        AIWeiXin.prototype.setShareAppMessage = function ($title, $desc, $url, $imgUrl, $type, $dataUrl) {
            if ($type === void 0) { $type = ""; }
            if ($dataUrl === void 0) { $dataUrl = ""; }
            if (this.weixinSDK.bodyMenuShareAppMessage() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareAppMessage为空！");
                return;
            }
            if ($desc !== undefined) {
                this.weixinSDK.bodyMenuShareAppMessage().title = ls.eval_e($title);
                this.weixinSDK.bodyMenuShareAppMessage().desc = ls.eval_e($desc);
                this.weixinSDK.bodyMenuShareAppMessage().link = ls.eval_e($url);
                this.weixinSDK.bodyMenuShareAppMessage().imgUrl = this.imagePrevUrl + $imgUrl;
            }
            if (this.weixinDebug)
                alert("朋友图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        AIWeiXin.prototype.setShareQQ = function ($title, $desc, $url, $imgUrl, $type, $dataUrl) {
            if ($type === void 0) { $type = ""; }
            if ($dataUrl === void 0) { $dataUrl = ""; }
            if (this.weixinSDK.bodyMenuShareQQ() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareQQ为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareQQ().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareQQ().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareQQ().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareQQ().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("QQ图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        AIWeiXin.prototype.setShareWeiBoMessage = function ($title, $desc, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareWeibo() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareWeibo为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareWeibo().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareWeibo().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareWeibo().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareWeibo().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("微博图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        AIWeiXin.prototype.setShareQZone = function ($title, $desc, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareQZone() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareQZone为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareQZone().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareQZone().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareQZone().link = $url;
            this.weixinSDK.bodyMenuShareQZone().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("QQ空间图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        return AIWeiXin;
    }(ls.AIDisplayObject));
    ls.AIWeiXin = AIWeiXin;
    __reflect(AIWeiXin.prototype, "ls.AIWeiXin");
    var WeiXinTimelineTriggerEvent = (function (_super) {
        __extends(WeiXinTimelineTriggerEvent, _super);
        function WeiXinTimelineTriggerEvent() {
            return _super.call(this) || this;
        }
        return WeiXinTimelineTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineTriggerEvent = WeiXinTimelineTriggerEvent;
    __reflect(WeiXinTimelineTriggerEvent.prototype, "ls.WeiXinTimelineTriggerEvent");
    var WeiXinTimelineCancelEvent = (function (_super) {
        __extends(WeiXinTimelineCancelEvent, _super);
        function WeiXinTimelineCancelEvent() {
            return _super.call(this) || this;
        }
        return WeiXinTimelineCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineCancelEvent = WeiXinTimelineCancelEvent;
    __reflect(WeiXinTimelineCancelEvent.prototype, "ls.WeiXinTimelineCancelEvent");
    var WeiXinTimelineSuccessEvent = (function (_super) {
        __extends(WeiXinTimelineSuccessEvent, _super);
        function WeiXinTimelineSuccessEvent() {
            return _super.call(this) || this;
        }
        return WeiXinTimelineSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineSuccessEvent = WeiXinTimelineSuccessEvent;
    __reflect(WeiXinTimelineSuccessEvent.prototype, "ls.WeiXinTimelineSuccessEvent");
    var WeiXinTimelineFailEvent = (function (_super) {
        __extends(WeiXinTimelineFailEvent, _super);
        function WeiXinTimelineFailEvent() {
            return _super.call(this) || this;
        }
        return WeiXinTimelineFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineFailEvent = WeiXinTimelineFailEvent;
    __reflect(WeiXinTimelineFailEvent.prototype, "ls.WeiXinTimelineFailEvent");
    var WeiXinShareAppMessageTriggerEvent = (function (_super) {
        __extends(WeiXinShareAppMessageTriggerEvent, _super);
        function WeiXinShareAppMessageTriggerEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareAppMessageTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageTriggerEvent = WeiXinShareAppMessageTriggerEvent;
    __reflect(WeiXinShareAppMessageTriggerEvent.prototype, "ls.WeiXinShareAppMessageTriggerEvent");
    var WeiXinShareAppMessageCancelEvent = (function (_super) {
        __extends(WeiXinShareAppMessageCancelEvent, _super);
        function WeiXinShareAppMessageCancelEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareAppMessageCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageCancelEvent = WeiXinShareAppMessageCancelEvent;
    __reflect(WeiXinShareAppMessageCancelEvent.prototype, "ls.WeiXinShareAppMessageCancelEvent");
    var WeiXinShareAppMessageSuccessEvent = (function (_super) {
        __extends(WeiXinShareAppMessageSuccessEvent, _super);
        function WeiXinShareAppMessageSuccessEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareAppMessageSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageSuccessEvent = WeiXinShareAppMessageSuccessEvent;
    __reflect(WeiXinShareAppMessageSuccessEvent.prototype, "ls.WeiXinShareAppMessageSuccessEvent");
    var WeiXinShareAppMessageFailEvent = (function (_super) {
        __extends(WeiXinShareAppMessageFailEvent, _super);
        function WeiXinShareAppMessageFailEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareAppMessageFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageFailEvent = WeiXinShareAppMessageFailEvent;
    __reflect(WeiXinShareAppMessageFailEvent.prototype, "ls.WeiXinShareAppMessageFailEvent");
    var WeiXinShareQQTriggerEvent = (function (_super) {
        __extends(WeiXinShareQQTriggerEvent, _super);
        function WeiXinShareQQTriggerEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQQTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQTriggerEvent = WeiXinShareQQTriggerEvent;
    __reflect(WeiXinShareQQTriggerEvent.prototype, "ls.WeiXinShareQQTriggerEvent");
    var WeiXinShareQQCancelEvent = (function (_super) {
        __extends(WeiXinShareQQCancelEvent, _super);
        function WeiXinShareQQCancelEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQQCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQCancelEvent = WeiXinShareQQCancelEvent;
    __reflect(WeiXinShareQQCancelEvent.prototype, "ls.WeiXinShareQQCancelEvent");
    var WeiXinShareQQSuccessEvent = (function (_super) {
        __extends(WeiXinShareQQSuccessEvent, _super);
        function WeiXinShareQQSuccessEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQQSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQSuccessEvent = WeiXinShareQQSuccessEvent;
    __reflect(WeiXinShareQQSuccessEvent.prototype, "ls.WeiXinShareQQSuccessEvent");
    var WeiXinShareQQFailEvent = (function (_super) {
        __extends(WeiXinShareQQFailEvent, _super);
        function WeiXinShareQQFailEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQQFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQFailEvent = WeiXinShareQQFailEvent;
    __reflect(WeiXinShareQQFailEvent.prototype, "ls.WeiXinShareQQFailEvent");
    var WeiXinShareTXWeiBoTriggerEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoTriggerEvent, _super);
        function WeiXinShareTXWeiBoTriggerEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareTXWeiBoTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoTriggerEvent = WeiXinShareTXWeiBoTriggerEvent;
    __reflect(WeiXinShareTXWeiBoTriggerEvent.prototype, "ls.WeiXinShareTXWeiBoTriggerEvent");
    var WeiXinShareTXWeiBoCancelEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoCancelEvent, _super);
        function WeiXinShareTXWeiBoCancelEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareTXWeiBoCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoCancelEvent = WeiXinShareTXWeiBoCancelEvent;
    __reflect(WeiXinShareTXWeiBoCancelEvent.prototype, "ls.WeiXinShareTXWeiBoCancelEvent");
    var WeiXinShareTXWeiBoSuccessEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoSuccessEvent, _super);
        function WeiXinShareTXWeiBoSuccessEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareTXWeiBoSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoSuccessEvent = WeiXinShareTXWeiBoSuccessEvent;
    __reflect(WeiXinShareTXWeiBoSuccessEvent.prototype, "ls.WeiXinShareTXWeiBoSuccessEvent");
    var WeiXinShareTXWeiBoFailEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoFailEvent, _super);
        function WeiXinShareTXWeiBoFailEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareTXWeiBoFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoFailEvent = WeiXinShareTXWeiBoFailEvent;
    __reflect(WeiXinShareTXWeiBoFailEvent.prototype, "ls.WeiXinShareTXWeiBoFailEvent");
    var WeiXinShareQZoneTriggerEvent = (function (_super) {
        __extends(WeiXinShareQZoneTriggerEvent, _super);
        function WeiXinShareQZoneTriggerEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQZoneTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneTriggerEvent = WeiXinShareQZoneTriggerEvent;
    __reflect(WeiXinShareQZoneTriggerEvent.prototype, "ls.WeiXinShareQZoneTriggerEvent");
    var WeiXinShareQZoneCancelEvent = (function (_super) {
        __extends(WeiXinShareQZoneCancelEvent, _super);
        function WeiXinShareQZoneCancelEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQZoneCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneCancelEvent = WeiXinShareQZoneCancelEvent;
    __reflect(WeiXinShareQZoneCancelEvent.prototype, "ls.WeiXinShareQZoneCancelEvent");
    var WeiXinShareQZoneSuccessEvent = (function (_super) {
        __extends(WeiXinShareQZoneSuccessEvent, _super);
        function WeiXinShareQZoneSuccessEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQZoneSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneSuccessEvent = WeiXinShareQZoneSuccessEvent;
    __reflect(WeiXinShareQZoneSuccessEvent.prototype, "ls.WeiXinShareQZoneSuccessEvent");
    var WeiXinShareQZoneFailEvent = (function (_super) {
        __extends(WeiXinShareQZoneFailEvent, _super);
        function WeiXinShareQZoneFailEvent() {
            return _super.call(this) || this;
        }
        return WeiXinShareQZoneFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneFailEvent = WeiXinShareQZoneFailEvent;
    __reflect(WeiXinShareQZoneFailEvent.prototype, "ls.WeiXinShareQZoneFailEvent");
    var WeixinSDK = (function () {
        function WeixinSDK() {
            this.debug = true;
            this._bodyMenuShareTimeline = new BodyMenuShareTimeline();
            this._bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
            this._bodyMenuShareQQ = new BodyMenuShareQQ();
            this._bodyMenuShareWeibo = new BodyMenuShareWeibo();
            this._bodyMenuShareQZone = new BodyMenuShareQZone();
        }
        WeixinSDK.prototype.bodyMenuShareTimeline = function () {
            return this._bodyMenuShareTimeline;
        };
        WeixinSDK.prototype.bodyMenuShareAppMessage = function () {
            return this._bodyMenuShareAppMessage;
        };
        WeixinSDK.prototype.bodyMenuShareQQ = function () {
            return this._bodyMenuShareQQ;
        };
        WeixinSDK.prototype.bodyMenuShareWeibo = function () {
            return this._bodyMenuShareWeibo;
        };
        WeixinSDK.prototype.bodyMenuShareQZone = function () {
            return this._bodyMenuShareQZone;
        };
        WeixinSDK.prototype.initialize = function () {
            var _this = this;
            this.self = this;
            if (this.signUrl == null || this.signUrl == "") {
                return;
            }
            if (window.location && window.location.href && window.location.href.split) {
                var curUrl = window.location.href.split('#')[0];
                curUrl = curUrl.slice(0, curUrl.length - 1);
                var fullSignUrl = this.signUrl + "?url=" + encodeURIComponent(location.href.split("#")[0]);
                var urlloader = new egret.URLLoader();
                var req = new egret.URLRequest(fullSignUrl);
                urlloader.load(req);
                req.method = egret.URLRequestMethod.GET;
                urlloader.addEventListener(egret.Event.COMPLETE, function (e) {
                    _this.signPackage = JSON.parse(e.target.data);
                    _this.getWeiXinConfig();
                    _this.registerWeiXinShareTimeline();
                    _this.registerWeiXinShareAppMessage();
                    _this.registerWeiXinShareQQ();
                    _this.registerWeiXinShareWeiBo();
                    _this.registerWeiXinShareQZone();
                }, this);
            }
        };
        WeixinSDK.prototype.getWeiXinConfig = function () {
            var bodyConfig = new BodyConfig();
            bodyConfig.debug = this.debug;
            bodyConfig.appId = this.signPackage.appId;
            bodyConfig.timestamp = this.signPackage.timestamp;
            bodyConfig.nonceStr = this.signPackage.nonceStr;
            bodyConfig.signature = this.signPackage.signature;
            bodyConfig.jsApiList = [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ];
            wx.config(bodyConfig);
        };
        WeixinSDK.prototype.registerWeiXinShareTimeline = function () {
            var _this = this;
            this.bodyMenuShareTimeline().trigger = function () {
                if (_this.debug) {
                    alert('用户点击分享到朋友圈');
                }
                if (_this.onTimelineTrigger != null)
                    _this.onTimelineTrigger();
            };
            this.bodyMenuShareTimeline().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onTimelineSuccess != null)
                    _this.onTimelineSuccess();
            };
            this.bodyMenuShareTimeline().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onTimelineCancel != null)
                    _this.onTimelineCancel();
            };
            this.bodyMenuShareTimeline().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onTimelineFail != null)
                    _this.onTimelineFail();
            };
            wx.onMenuShareTimeline(this.bodyMenuShareTimeline());
        };
        WeixinSDK.prototype.registerWeiXinShareAppMessage = function () {
            var _this = this;
            this.bodyMenuShareAppMessage().trigger = function () {
                if (_this.debug)
                    alert('用户点击发送给朋友');
                if (_this.onAppMessageTrigger != null)
                    _this.onAppMessageTrigger();
            };
            this.bodyMenuShareAppMessage().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onAppMessageSuccess != null)
                    _this.onAppMessageSuccess();
            };
            this.bodyMenuShareAppMessage().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onAppMessageCancel != null)
                    _this.onAppMessageCancel();
            };
            this.bodyMenuShareAppMessage().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onAppMessageFail != null)
                    _this.onAppMessageFail();
            };
            wx.onMenuShareAppMessage(this.bodyMenuShareAppMessage());
        };
        WeixinSDK.prototype.registerWeiXinShareQQ = function () {
            var _this = this;
            this.bodyMenuShareQQ().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到QQ');
                if (_this.onQQTrigger != null)
                    _this.onQQTrigger();
            };
            this.bodyMenuShareQQ().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareQQ().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onQQSuccess != null)
                    _this.onQQSuccess();
            };
            this.bodyMenuShareQQ().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onQQCancel != null)
                    _this.onQQCancel();
            };
            this.bodyMenuShareQQ().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onQQFail != null)
                    _this.onQQFail();
            };
            wx.onMenuShareQQ(this.bodyMenuShareQQ());
        };
        WeixinSDK.prototype.registerWeiXinShareWeiBo = function () {
            var _this = this;
            this.bodyMenuShareWeibo().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到微博');
                if (_this.onWeiBoTrigger != null)
                    _this.onWeiBoTrigger();
            };
            this.bodyMenuShareWeibo().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareWeibo().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onWeiBoSuccess != null)
                    _this.onWeiBoSuccess();
            };
            this.bodyMenuShareWeibo().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onWeiBoCancel != null)
                    _this.onWeiBoCancel();
            };
            this.bodyMenuShareWeibo().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onWeiBoFail != null)
                    _this.onWeiBoFail();
            };
            wx.onMenuShareWeibo(this.bodyMenuShareWeibo());
        };
        WeixinSDK.prototype.registerWeiXinShareQZone = function () {
            var _this = this;
            this.bodyMenuShareQZone().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到微博');
                if (_this.onQZoneTrigger != null)
                    _this.onQZoneTrigger();
            };
            this.bodyMenuShareQZone().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareQZone().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onQZoneSuccess != null)
                    _this.onQZoneSuccess();
            };
            this.bodyMenuShareQZone().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onQZoneCancel != null)
                    _this.onQZoneCancel();
            };
            this.bodyMenuShareQZone().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onQZoneFail != null)
                    _this.onQZoneFail();
            };
            wx.onMenuShareQZone(this.bodyMenuShareQZone());
        };
        return WeixinSDK;
    }());
    __reflect(WeixinSDK.prototype, "WeixinSDK");
})(ls || (ls = {}));
