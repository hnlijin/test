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
    var AIBitmapText = (function (_super) {
        __extends(AIBitmapText, _super);
        function AIBitmapText() {
            var _this = _super.call(this) || this;
            _this.name = "bitmapText";
            _this._bitmapText = new egret.BitmapText();
            _this.container.addChild(_this._bitmapText);
            return _this;
        }
        AIBitmapText.prototype.initialize = function () {
            var url = decodeURIComponent(this["bmpUrl"]);
            var fnturl = decodeURIComponent(this["fntUrl"]);
            this._bitmapURL = url;
            this._fntUrl = fnturl;
            var data = ls.ResCache.componentResources[fnturl];
            if (data) {
                this.onFntComplete(data);
            }
            else {
                var onFntResComplete = function (bitmapFont) {
                    this.onFntComplete(bitmapFont);
                };
                RES.getResByUrl(fnturl, onFntResComplete, this, RES.ResourceItem.TYPE_FONT);
            }
        };
        AIBitmapText.prototype.onFntComplete = function (bitmapFont) {
            this._bitmapText.font = bitmapFont;
            this._sourceWidth = this._bitmapText.width;
            this._sourceHeight = this._bitmapText.height;
            if (this.text)
                this._bitmapText.text = this.text.toString();
            this._bitmapText.width = this.width;
            this._bitmapText.height = this.height;
            this._bitmapText.letterSpacing = this.letterSpacing;
            this._bitmapText.lineSpacing = this.lineSpacing;
            this._bitmapText.verticalAlign = this._verticalAlign;
            this._bitmapText.textAlign = this._textAlign;
            this._bitmapText.smoothing = this._smoothing;
            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onResourceLoaded));
        };
        Object.defineProperty(AIBitmapText.prototype, "letterSpacing", {
            get: function () {
                return this._letterSpacing;
            },
            set: function (value) {
                if (this._letterSpacing != value) {
                    if (this._bitmapText)
                        this._bitmapText.letterSpacing = value;
                    else
                        this._letterSpacing = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "lineSpacing", {
            get: function () {
                return this._lineSpacing;
            },
            set: function (value) {
                if (this._lineSpacing != value) {
                    if (this._bitmapText)
                        this._bitmapText.lineSpacing = value;
                    else
                        this._lineSpacing = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function ($text) {
                if (this._bitmapText)
                    this._bitmapText.text = $text;
                else
                    this._text = $text;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                if (this._bitmapText) {
                    if (this._bitmapText.width != value)
                        this._bitmapText.width = value;
                }
                if (this._width != value) {
                    this.update = true;
                    this._width = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                if (this._bitmapText) {
                    if (this._bitmapText.height != value)
                        this._bitmapText.height = value;
                }
                if (this._height != value) {
                    this.update = true;
                    this._height = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "scaleX", {
            get: function () {
                return this._scaleX;
            },
            set: function (value) {
                if (this._scaleX != value) {
                    this._scaleX = value;
                    this.width = this._scaleX * this._sourceWidth;
                    this.update = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "scaleY", {
            get: function () {
                return this._scaleY;
            },
            set: function (value) {
                if (this._scaleY != value) {
                    this._scaleY = value;
                    this.height = this._scaleY * this._sourceHeight;
                    this.update = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIBitmapText.prototype, "scale", {
            get: function () {
                if (this._scaleX == this._scaleY)
                    return this._scaleX;
                else
                    return 1;
            },
            set: function (value) {
                if (this.scale != value) {
                    this.update = true;
                    this.scaleX = this.scaleY = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        AIBitmapText.prototype.compareBitmapFontText = function (event) {
            return { instances: [this], status: this._text == ls.eval_e(event.text) };
        };
        AIBitmapText.prototype.setBitmapText = function ($text) {
            var text = ls.eval_e($text);
            if (this._text != text) {
                if (this._bitmapText) {
                    if (typeof text === "number")
                        this._bitmapText.text = text.toString();
                    else
                        this._bitmapText.text = text;
                }
                this._text = text;
            }
        };
        AIBitmapText.prototype.appendBitmapText = function ($text) {
            var text = ls.eval_e($text);
            if (this._bitmapText) {
                if (typeof text === "number")
                    this._bitmapText.text += text.toString();
                else
                    this._bitmapText.text += text;
            }
            this._text += text;
        };
        AIBitmapText.prototype.setBitmapLetterSpace = function ($letterSpace) {
            this._letterSpacing = ls.eval_e($letterSpace);
            if (this._bitmapText)
                this._bitmapText.letterSpacing = this._letterSpacing;
        };
        AIBitmapText.prototype.setBitmapLineSpace = function ($lineSpace) {
            this._lineSpacing = ls.eval_e($lineSpace);
            if (this._bitmapText)
                this._bitmapText.lineSpacing = this._lineSpacing;
        };
        AIBitmapText.prototype.setBitmapTextAlign = function (textAlign) {
            this._textAlign = ls.eval_e(textAlign);
            if (this._bitmapText)
                this._bitmapText.textAlign = this._textAlign;
        };
        AIBitmapText.prototype.setBitmapVerticalAlign = function (verticalAlign) {
            this._verticalAlign = ls.eval_e(verticalAlign);
            if (this._bitmapText)
                this._bitmapText.verticalAlign = this._verticalAlign;
        };
        AIBitmapText.prototype.setBitmapSmoothing = function (smooth) {
            this._smoothing = ls.eval_e(smooth);
            if (this._bitmapText)
                this._bitmapText.smoothing = this._smoothing;
        };
        Object.defineProperty(AIBitmapText.prototype, "bitmapText", {
            get: function () {
                return this._bitmapText;
            },
            enumerable: true,
            configurable: true
        });
        AIBitmapText.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["text"] = this.text;
            o["letterSpacing"] = this.letterSpacing;
            o["lineSpacing"] = this.lineSpacing;
            o["bmpUrl"] = this["bmpUrl"];
            o["fntUrl"] = this["fntUrl"];
            return o;
        };
        AIBitmapText.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
                this["bmpUrl"] = o["bmpUrl"];
                this["fntUrl"] = o["fntUrl"];
                this.text = o["text"];
                this.letterSpacing = o["letterSpacing"];
                this.lineSpacing = o["lineSpacing"];
            }
        };
        AIBitmapText.prototype.clone = function () {
            var cl = _super.prototype.clone.call(this);
            cl.text = this.text;
            cl.letterSpacing = this.letterSpacing;
            cl.lineSpacing = this.lineSpacing;
            cl["bmpUrl"] = this["bmpUrl"];
            cl["fntUrl"] = this["fntUrl"];
            return cl;
        };
        return AIBitmapText;
    }(ls.AISprite));
    ls.AIBitmapText = AIBitmapText;
    __reflect(AIBitmapText.prototype, "ls.AIBitmapText");
    var CompareBitmapFontTextEvent = (function (_super) {
        __extends(CompareBitmapFontTextEvent, _super);
        function CompareBitmapFontTextEvent() {
            return _super.call(this) || this;
        }
        return CompareBitmapFontTextEvent;
    }(ls.BaseEvent));
    ls.CompareBitmapFontTextEvent = CompareBitmapFontTextEvent;
    __reflect(CompareBitmapFontTextEvent.prototype, "ls.CompareBitmapFontTextEvent");
})(ls || (ls = {}));
