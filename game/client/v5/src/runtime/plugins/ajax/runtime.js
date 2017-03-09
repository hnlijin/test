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
    var AIAjax = (function (_super) {
        __extends(AIAjax, _super);
        function AIAjax() {
            var _this = _super.call(this) || this;
            _this.next_request_headers = {};
            _this.next_override_mime = "";
            _this.datas = {};
            _this.cookiesHash = {};
            if (AIAjax._instance != null) {
                throw new Error("AIWebSocket 为单例！！！");
            }
            _this.name = "Ajax";
            AIAjax._instance = _this;
            return _this;
        }
        Object.defineProperty(AIAjax, "instance", {
            get: function () {
                if (this._instance == null)
                    this._instance = new AIAjax();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        AIAjax.prototype.initialize = function () {
            this._lastData = "";
            this.curTag = "";
            this._progress = 0;
            this.timeout = -1;
        };
        AIAjax.prototype.doRequest = function (tag, url, method, data) {
            if (data === void 0) { data = null; }
            var self = this;
            var errorFunc = function () {
                self.curTag = this.requestTag;
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onAjaxRequestError, { tag: this.requestTag }));
            };
            var progressFunc = function (e) {
                if (!e["lengthComputable"])
                    return;
                self._progress = e.loaded / e.total;
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onAjaxRequestProress, { tag: this.requestTag }));
            };
            try {
                var request;
                if (this.isWindowsPhone8)
                    request = new window['ActiveXObject']("Microsoft.XMLHTTP");
                else
                    request = new XMLHttpRequest();
                request.requestTag = tag;
                request.requestURL = url;
                request.requestData = data;
                request.withCredentials = true;
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        self.curTag = this.requestTag;
                        var curData = "";
                        if (this.responseText)
                            curData = this.responseText.replace(/\r\n/g, "\n");
                        else
                            curData = "";
                        self._lastData = curData;
                        if (self.datas[this.requestTag] == null) {
                            self.datas[this.requestTag] = { tag: this.requestTag, data: curData };
                        }
                        else
                            self.datas[this.requestTag].data = curData;
                        if (this.status >= 400)
                            self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onAjaxRequestError, { tag: this.requestTag }));
                        else {
                            if (self._lastData.length > 0) {
                                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onAjaxRequestComplete, { tag: this.requestTag }));
                            }
                        }
                    }
                };
                if (!this.isWindowsPhone8) {
                    request.onerror = errorFunc;
                    request.ontimeout = errorFunc;
                    request.onabort = errorFunc;
                    request.onprogress = progressFunc;
                }
                request.open(method, url);
                if (!this.isWindowsPhone8) {
                    if (this.timeout >= 0 && typeof request["timeout"] != "undefined") {
                        request["timeout"] = this.timeout;
                    }
                }
                try {
                    request.responseType = "text";
                }
                catch (e) {
                }
                if (data) {
                    if (request["setRequestHeader"] && !this.next_request_headers.hasOwnProperty("Content-Type")) {
                        request["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded");
                    }
                }
                if (request["setRequestHeader"]) {
                    for (var p in this.next_request_headers) {
                        if (this.next_request_headers.hasOwnProperty(p)) {
                            try {
                                request["setRequestHeader"](p, this.next_request_headers[p]);
                            }
                            catch (e) { }
                        }
                    }
                    this.next_request_headers = {};
                }
                if (this.next_override_mime && request["overrideMimeType"]) {
                    try {
                        request["overrideMimeType"](this.next_override_mime);
                    }
                    catch (e) { }
                    this.next_override_mime = "";
                }
                if (data) {
                    request.send(data);
                }
                else
                    request.send();
            }
            catch (e) {
                errorFunc();
            }
        };
        AIAjax.prototype.onAjaxRequestComplete = function (event) {
            return { instances: [this], status: event.getStatus("tag") };
        };
        AIAjax.prototype.onAjaxRequestError = function (event) {
            return { instances: [this], status: event.getStatus("tag") };
        };
        AIAjax.prototype.onAjaxRequestProress = function (event) {
            return { instances: [this], status: event.getStatus("tag") };
        };
        AIAjax.prototype.ajaxSendToURL = function (tag, url, data, method) {
            if (method === void 0) { method = "POST"; }
            this.doRequest(tag, ls.eval_e(url), method, ls.eval_e(data));
        };
        AIAjax.prototype.requestFromURL = function (tag, url) {
            this.doRequest(tag, ls.eval_e(url), "GET");
        };
        AIAjax.prototype.setRequestHeader = function (header, url) {
            this.next_request_headers[header] = ls.eval_e(url);
        };
        AIAjax.prototype.setRequestTimeout = function (timeout) {
            this.timeout = ls.eval_e(timeout) * 1000;
        };
        AIAjax.prototype.overrideMIMEType = function (m) {
            this.next_override_mime = m;
        };
        Object.defineProperty(AIAjax.prototype, "lastData", {
            get: function () {
                return this._lastData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIAjax.prototype, "progress", {
            get: function () {
                return this._progress;
            },
            enumerable: true,
            configurable: true
        });
        AIAjax.prototype.getData = function (tag) {
            var ajaxData = this.datas[tag];
            if (ajaxData) {
                return ajaxData.data;
            }
            return "";
        };
        AIAjax.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            return o;
        };
        AIAjax.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        return AIAjax;
    }(ls.AIObject));
    ls.AIAjax = AIAjax;
    __reflect(AIAjax.prototype, "ls.AIAjax");
    var OnAjaxRequestCompleteEvent = (function (_super) {
        __extends(OnAjaxRequestCompleteEvent, _super);
        function OnAjaxRequestCompleteEvent() {
            return _super.call(this) || this;
        }
        return OnAjaxRequestCompleteEvent;
    }(ls.BaseEvent));
    ls.OnAjaxRequestCompleteEvent = OnAjaxRequestCompleteEvent;
    __reflect(OnAjaxRequestCompleteEvent.prototype, "ls.OnAjaxRequestCompleteEvent");
    var OnAjaxRequestErrorEvent = (function (_super) {
        __extends(OnAjaxRequestErrorEvent, _super);
        function OnAjaxRequestErrorEvent() {
            return _super.call(this) || this;
        }
        return OnAjaxRequestErrorEvent;
    }(ls.BaseEvent));
    ls.OnAjaxRequestErrorEvent = OnAjaxRequestErrorEvent;
    __reflect(OnAjaxRequestErrorEvent.prototype, "ls.OnAjaxRequestErrorEvent");
    var OnAjaxRequestProressEvent = (function (_super) {
        __extends(OnAjaxRequestProressEvent, _super);
        function OnAjaxRequestProressEvent() {
            return _super.call(this) || this;
        }
        return OnAjaxRequestProressEvent;
    }(ls.BaseEvent));
    ls.OnAjaxRequestProressEvent = OnAjaxRequestProressEvent;
    __reflect(OnAjaxRequestProressEvent.prototype, "ls.OnAjaxRequestProressEvent");
})(ls || (ls = {}));
