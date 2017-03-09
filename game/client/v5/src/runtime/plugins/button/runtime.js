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
    var AIButton = (function (_super) {
        __extends(AIButton, _super);
        function AIButton() {
            var _this = _super.call(this) || this;
            _this.newWidth = 0;
            _this.newHeight = 0;
            if (_this._textfield == null)
                _this._textfield = new egret.TextField();
            _this._up = new egret.Bitmap();
            _this._down = new egret.Bitmap();
            _this._disable = new egret.Bitmap();
            return _this;
        }
        AIButton.prototype.initialize = function () {
            this._currentState = this._up;
            this._up.touchEnabled = this._down.touchEnabled = this._disable.touchEnabled = false;
            this.container.touchChildren = this.container.touchEnabled = true;
            if (this.enabled)
                this.container.addChildAt(this._up, 0);
            ls.GameUILayer.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
        };
        Object.defineProperty(AIButton.prototype, "text", {
            get: function () {
                return this._textfield != null ? this._textfield.text : "";
            },
            set: function ($text) {
                if (this._textfield.text != $text)
                    this._textfield.text = $text;
                this._textfield.textAlign = egret.HorizontalAlign.CENTER;
                this._textfield.verticalAlign = egret.VerticalAlign.MIDDLE;
                this._textfield.size = 12;
                if (this._textfield.parent == null)
                    this.container.addChild(this._textfield);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "bold", {
            get: function () {
                return this._textfield.bold;
            },
            set: function (value) {
                this._textfield.bold = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "fontFamily", {
            get: function () {
                return this._textfield.fontFamily;
            },
            set: function (value) {
                this._textfield.fontFamily = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "textColor", {
            get: function () {
                return this._textfield.textColor;
            },
            set: function (value) {
                this._textfield.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "size", {
            get: function () {
                return this._textfield.size;
            },
            set: function (value) {
                this._textfield.size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "textAlign", {
            get: function () {
                return this._textfield.textAlign;
            },
            set: function (value) {
                this._textfield.textAlign = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "verticalAlign", {
            get: function () {
                return this._textfield.verticalAlign;
            },
            set: function (value) {
                this._textfield.verticalAlign = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "italic", {
            get: function () {
                return this._textfield.italic;
            },
            set: function (value) {
                this._textfield.italic = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "border", {
            get: function () {
                return this._textfield.border;
            },
            set: function (value) {
                this._textfield.border = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "borderColor", {
            get: function () {
                return this._textfield.borderColor;
            },
            set: function (value) {
                this._textfield.borderColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "background", {
            get: function () {
                return this._textfield.background;
            },
            set: function (value) {
                this._textfield.background = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "backgroundColor", {
            get: function () {
                return this._textfield.backgroundColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "backgourndColor", {
            set: function (value) {
                this._textfield.backgroundColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "maxChars", {
            get: function () {
                return this._textfield.maxChars;
            },
            set: function (value) {
                this._textfield.maxChars = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "displayAsPassword", {
            get: function () {
                return this._textfield.displayAsPassword;
            },
            set: function (value) {
                this._textfield.displayAsPassword = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "wordWrap", {
            get: function () {
                return this._textfield.multiline;
            },
            set: function (value) {
                this._textfield.multiline = (value == 1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "touchX", {
            get: function () {
                return this._touchX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "touchY", {
            get: function () {
                return this._touchY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "touchStageX", {
            get: function () {
                return this._touchStageX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "touchStageY", {
            get: function () {
                return this._touchStageY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "touchPointID", {
            get: function () {
                return this._touchPointID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "width", {
            get: function () {
                if (this.newWidth != 0)
                    return this.newWidth;
                return this.container.width;
            },
            set: function (value) {
                if (this.newWidth != value) {
                    if (this._down)
                        this._down.width = value;
                    if (this._up)
                        this._up.width = value;
                    if (this._disable)
                        this._disable.width = value;
                    this.newWidth = value;
                    this.update = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "height", {
            get: function () {
                if (this.newHeight != 0)
                    return this.newHeight;
                return this.container.height;
            },
            set: function (value) {
                if (this.newHeight != value) {
                    if (this._down)
                        this._down.height = value;
                    if (this._up)
                        this._up.height = value;
                    if (this._disable)
                        this._disable.height = value;
                    this.newHeight = value;
                    this.update = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (this._enabled != value) {
                    this._enabled = value;
                    this._up.touchEnabled = this._down.touchEnabled = this._disable.touchEnabled = value;
                    if (this._currentState && this._currentState.parent != null)
                        this.container.removeChild(this._currentState);
                    if (value)
                        this._currentState = this._up;
                    else
                        this._currentState = this._disable;
                    if (this._currentState && this._currentState.parent == null)
                        this.container.addChildAt(this._currentState, 0);
                    this.container.touchChildren = this.container.touchEnabled = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "upSkin", {
            set: function ($skin) {
                if (this._upSkin != $skin) {
                    this._upSkin = $skin;
                    this.setBitmap($skin, this._up);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "downSkin", {
            set: function ($skin) {
                if (this._downSkin != $skin) {
                    this._downSkin = $skin;
                    this.setBitmap($skin, this._down);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIButton.prototype, "disableSkin", {
            set: function ($skin) {
                if (this._disableSkin != $skin) {
                    this._disableSkin = $skin;
                    this.setBitmap($skin, this._disable);
                }
            },
            enumerable: true,
            configurable: true
        });
        AIButton.prototype.onTouchEvent = function ($event) {
            if (!this.enabled)
                return;
            if (this._currentState && this._currentState.parent != null)
                this._currentState.parent.removeChild(this._currentState);
            _super.prototype.onTouchEvent.call(this, $event);
            switch ($event.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
                    this._currentState = this._down;
                    break;
            }
            if (this._currentState && this._currentState.parent == null && this.enabled)
                this.container.addChildAt(this._currentState, 0);
        };
        AIButton.prototype.onStageTouchEnd = function (event) {
            if (!this.enabled)
                return;
            if (this._currentState && this._currentState.parent != null)
                this._currentState.parent.removeChild(this._currentState);
            switch (event.type) {
                case egret.TouchEvent.TOUCH_END:
                    this._currentState = this._up;
                    break;
            }
            if (this._currentState && this._currentState.parent == null && this.enabled)
                this.container.addChildAt(this._currentState, 0);
        };
        AIButton.prototype.setBitmap = function ($skin, $sourceBitmap) {
            var self = this;
            var textureDatas = ls.getTexture($skin);
            if (textureDatas != null)
                var texture = textureDatas[0];
            if (texture != null) {
                $sourceBitmap.texture = texture;
                if (self.newWidth != 0)
                    self.width = self.newWidth;
                if (self.newHeight != 0)
                    self.height = self.newHeight;
                if (self._textfield) {
                    self._textfield.width = $sourceBitmap.width;
                    self._textfield.height = $sourceBitmap.height;
                }
                if (textureDatas) {
                    $sourceBitmap.x = textureDatas[1];
                    $sourceBitmap.y = textureDatas[2];
                }
            }
            else {
                var onRESComplete = function (texture) {
                    if (texture) {
                        this.texture = texture;
                        if (self.newWidth != 0)
                            self.width = self.newWidth;
                        if (self.newHeight != 0)
                            self.height = self.newHeight;
                        if (self._textfield) {
                            self._textfield.width = this.width;
                            self._textfield.height = this.height;
                        }
                    }
                };
                RES.getResByUrl($skin, onRESComplete, $sourceBitmap, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        AIButton.prototype.compareButtonText = function ($compareTextEvent) {
            var textValue = ls.eval_e($compareTextEvent.text);
            return { instances: [this], status: this._textfield.text == textValue };
        };
        AIButton.prototype.setButtonText = function ($text) {
            this.text = ls.eval_e($text);
        };
        AIButton.prototype.setButtonFontColor = function ($textColor) {
            var textColor = ls.eval_e($textColor);
            ls.assert(typeof textColor !== "number", "setFontColor parameter type incorrect!!");
            this._textfield.textColor = textColor;
        };
        AIButton.prototype.setButtonFontFamily = function ($fontFamily) {
            var fontFamily = ls.eval_e($fontFamily);
            ls.assert(typeof fontFamily !== "string", "setFontFamily parameter type incorrect!!");
            this._textfield.fontFamily = fontFamily;
        };
        AIButton.prototype.setButtonFontSize = function ($size) {
            var size = ls.eval_e($size);
            ls.assert(typeof size !== "number", "setFontSize parameter type incorrect!!");
            this._textfield.size = size;
        };
        AIButton.prototype.setButtonTextAlign = function ($textAlign) {
            var textAlign = ls.eval_e($textAlign);
            ls.assert(typeof textAlign !== "string", "setTextAlign parameter type incorrect!!");
            this._textfield.textAlign = textAlign;
        };
        AIButton.prototype.setButtonVerticalAlign = function ($vertialAlign) {
            var verticalAlign = ls.eval_e($vertialAlign);
            ls.assert(typeof verticalAlign !== "string", "setVerticalAlign parameter type incorrect!!");
            this._textfield.verticalAlign = verticalAlign;
        };
        AIButton.prototype.setEnabled = function ($enabled) {
            var enabled = ls.eval_e($enabled);
            ls.assert(typeof enabled !== "number", "AIButton setEnabled parameter type incorrect!!");
            this.enabled = (enabled == 1);
        };
        AIButton.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["text"] = this.text;
            o["upSkin"] = this._upSkin;
            o["downSkin"] = this._downSkin;
            o["disableSkin"] = this._disableSkin;
            o["fontFamily"] = this.fontFamily;
            o["size"] = this.size;
            o["textColor"] = this.textColor;
            o["bold"] = this.bold;
            o["textAlign"] = this.textAlign;
            o["verticalAlign"] = this.verticalAlign;
            o["maxChars"] = this.maxChars;
            o["displayAsPassword"] = this.displayAsPassword;
            o["wordWrap"] = this.wordWrap;
            o["enabled"] = this.enabled;
            return o;
        };
        AIButton.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
                this.text = o["text"];
                this.upSkin = o["upSkin"];
                this.downSkin = o["downSkin"];
                this.disableSkin = o["disableSkin"];
                this.fontFamily = o["fontFamily"];
                this.size = o["size"];
                this.textColor = o["textColor"];
                this.bold = o["bold"];
                this.textAlign = o["textAlign"];
                this.verticalAlign = o["verticalAlign"];
                this.maxChars = o["maxChars"];
                this.displayAsPassword = o["displayAsPassword"];
                this.wordWrap = o["wordWrap"];
                this.enabled = o["enabled"];
            }
        };
        AIButton.prototype.clone = function () {
            var cl = _super.prototype.clone.call(this);
            cl.text = this.text;
            cl.upSkin = this._upSkin;
            cl.downSkin = this._downSkin;
            cl.disableSkin = this._disableSkin;
            cl.fontFamily = this.fontFamily;
            cl.size = this.size;
            cl.textColor = this.textColor;
            cl.bold = this.bold;
            cl.textAlign = this.textAlign;
            cl.verticalAlign = this.verticalAlign;
            cl.maxChars = this.maxChars;
            cl.displayAsPassword = this.displayAsPassword;
            cl.wordWrap = this.wordWrap;
            cl.enabled = this.enabled;
            return cl;
        };
        return AIButton;
    }(ls.AIDisplayObject));
    ls.AIButton = AIButton;
    __reflect(AIButton.prototype, "ls.AIButton");
    var CompareTextEvent = (function (_super) {
        __extends(CompareTextEvent, _super);
        function CompareTextEvent() {
            return _super.call(this) || this;
        }
        return CompareTextEvent;
    }(ls.BaseEvent));
    ls.CompareTextEvent = CompareTextEvent;
    __reflect(CompareTextEvent.prototype, "ls.CompareTextEvent");
})(ls || (ls = {}));
