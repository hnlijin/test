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
    var AITextField = (function (_super) {
        __extends(AITextField, _super);
        function AITextField() {
            var _this = _super.call(this) || this;
            _this.name = "TextField";
            _this._textfield = new egret.TextField();
            _this._textfield.addEventListener(egret.TextEvent.FOCUS_IN, _this.onTextEvent, _this);
            _this._textfield.addEventListener(egret.TextEvent.FOCUS_OUT, _this.onTextEvent, _this);
            _this._textfield.addEventListener(egret.TextEvent.CHANGE, _this.onTextEvent, _this);
            _this.container.addChild(_this._textfield);
            return _this;
        }
        Object.defineProperty(AITextField.prototype, "textField", {
            get: function () {
                return this._textfield;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "type", {
            get: function () {
                return this._textfield.type;
            },
            set: function (value) {
                this._textfield.type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "inputType", {
            get: function () {
                return this._textfield.inputType;
            },
            set: function (value) {
                this._textfield.inputType = value;
                this.displayAsPassword = (value == "password");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "enableInput", {
            set: function (value) {
                this.type = (value) ? "input" : "dynamic";
                this._textfield.touchEnabled = (this.type == "dynamic") ? false : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                if (this.container.width != value) {
                    this.update = true;
                    this.container.width = value;
                    this._width = value;
                    if (this.anchorX)
                        this.container.anchorOffsetX = this.width * this.anchorX;
                }
                this._textfield.width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                if (this.container.height != value) {
                    this.update = true;
                    this.container.height = value;
                    this._height = value;
                    if (this.anchorY)
                        this.container.anchorOffsetY = this.height * this.anchorY;
                }
                this._textfield.height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "text", {
            get: function () {
                return this._textfield.text;
            },
            set: function (value) {
                this._textfield.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "bold", {
            get: function () {
                return this._textfield.bold;
            },
            set: function (value) {
                this._textfield.bold = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "fontFamily", {
            get: function () {
                return this._textfield.fontFamily;
            },
            set: function (value) {
                this._textfield.fontFamily = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "textColor", {
            get: function () {
                return this._textfield.textColor;
            },
            set: function (value) {
                this._textfield.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "size", {
            get: function () {
                return this._textfield.size;
            },
            set: function (value) {
                this._textfield.size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "textAlign", {
            get: function () {
                return this._textfield.textAlign;
            },
            set: function (value) {
                this._textfield.textAlign = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "verticalAlign", {
            get: function () {
                return this._textfield.verticalAlign;
            },
            set: function (value) {
                this._textfield.verticalAlign = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "italic", {
            get: function () {
                return this._textfield.italic;
            },
            set: function (value) {
                this._textfield.italic = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "border", {
            get: function () {
                return this._textfield.border;
            },
            set: function (value) {
                this._textfield.border = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "borderColor", {
            get: function () {
                return this._textfield.borderColor;
            },
            set: function (value) {
                this._textfield.borderColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "background", {
            get: function () {
                return this._textfield.background;
            },
            set: function (value) {
                this._textfield.background = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "backgroundColor", {
            get: function () {
                return this._textfield.backgroundColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "backgourndColor", {
            set: function (value) {
                this._textfield.backgroundColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "maxChars", {
            get: function () {
                return this._textfield.maxChars;
            },
            set: function (value) {
                this._textfield.maxChars = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "displayAsPassword", {
            get: function () {
                return this._textfield.displayAsPassword;
            },
            set: function (value) {
                this._textfield.displayAsPassword = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AITextField.prototype, "wordWrap", {
            get: function () {
                return this._textfield.multiline;
            },
            set: function (value) {
                this._textfield.multiline = (value == 1);
            },
            enumerable: true,
            configurable: true
        });
        AITextField.prototype.onTextEvent = function (event) {
            switch (event.type) {
                case egret.TextEvent.FOCUS_IN:
                    this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onTextFocusIn));
                    break;
                case egret.TextEvent.FOCUS_OUT:
                    this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onTextFocusOut));
                    break;
                case egret.TextEvent.CHANGE:
                    this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onTextChanged));
                    break;
            }
        };
        AITextField.prototype.onTextFocusIn = function (event) {
            return { instances: [this], status: true };
        };
        AITextField.prototype.onTextFocusOut = function (event) {
            return { instances: [this], status: true };
        };
        AITextField.prototype.onTextChanged = function (event) {
            return { instances: [this], status: true };
        };
        AITextField.prototype.compareText = function ($compareTextEvent) {
            var textValue = ls.eval_e($compareTextEvent.text);
            return { instances: [this], status: this._textfield.text == textValue };
        };
        AITextField.prototype.appendText = function ($text) {
            var text = ls.eval_e($text);
            this.textField.appendText(text);
        };
        AITextField.prototype.setFontColor = function ($textColor) {
            var textColor = ls.eval_e($textColor);
            ls.assert(typeof textColor !== "number", "setFontColor parameter type incorrect!!");
            this.textColor = textColor;
        };
        AITextField.prototype.setFontFamily = function ($fontFamily) {
            var fontFamily = ls.eval_e($fontFamily);
            ls.assert(typeof fontFamily !== "string", "setFontFamily parameter type incorrect!!");
            this.fontFamily = fontFamily;
        };
        AITextField.prototype.setFontSize = function ($size) {
            var size = ls.eval_e($size);
            ls.assert(typeof size !== "number", "setFontSize parameter type incorrect!!");
            this.size = size;
        };
        AITextField.prototype.setBold = function ($bold) {
            var bold = ls.eval_e($bold);
            ls.assert(typeof bold !== "number", "setBold parameter type incorrect!!");
            this.bold = (bold == 1) ? true : false;
        };
        AITextField.prototype.setText = function ($text) {
            this.text = $text + "";
        };
        AITextField.prototype.setTextAlign = function ($textAlign) {
            this.textAlign = $textAlign;
        };
        AITextField.prototype.setVerticalAlign = function ($vertialAlign) {
            this.verticalAlign = $vertialAlign;
        };
        AITextField.prototype.setMaxChars = function ($maxChars) {
            var maxChars = ls.eval_e($maxChars);
            ls.assert(typeof maxChars !== "number", "setMaxChars parameter type incorrect!!");
            this.maxChars = maxChars;
        };
        AITextField.prototype.setItalic = function ($value) {
            var value = ls.eval_e($value);
            ls.assert(typeof value !== "number", "setItalic parameter type incorrect!!");
            this.italic = (value == 1) ? true : false;
        };
        AITextField.prototype.setType = function ($value) {
            var value = ls.eval_e($value);
            ls.assert(typeof value !== "string", "setType parameter type incorrect!!");
            this.type = value;
        };
        AITextField.prototype.setWordWrap = function ($value) {
            var value = ls.eval_e($value);
            ls.assert(typeof value !== "number", "setType setWordWrap type incorrect!!");
            this.wordWrap = ($value == 1) ? true : false;
        };
        AITextField.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["fontFamily"] = this.fontFamily;
            o["textColor"] = this.textColor;
            o["size"] = this.size;
            o["textAlign"] = this.textAlign;
            o["verticalAlign"] = this.verticalAlign;
            o["italic"] = this.italic;
            o["border"] = this.border;
            o["borderColor"] = this.borderColor;
            o["background"] = this.background;
            o["backgourndColor"] = this.backgourndColor;
            o["text"] = this.text;
            o["italic"] = this.italic;
            o["enableInput"] = this.enableInput;
            o["bold"] = this.bold;
            o["displayAsPassword"] = this.displayAsPassword;
            o["maxChars"] = this.maxChars;
            return o;
        };
        AITextField.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
                this.fontFamily = o["fontFamily"];
                this.textColor = o["textColor"];
                this.size = o["size"];
                this.textAlign = o["textAlign"];
                this.verticalAlign = o["verticalAlign"];
                this.italic = o["italic"];
                this.border = o["border"];
                this.borderColor = o["borderColor"];
                this.background = o["background"];
                this.backgourndColor = o["backgourndColor"];
                this.text = o["text"];
                this.italic = o["italic"];
                this.enableInput = o["enableInput"];
                this.bold = o["bold"];
                this.displayAsPassword = o["displayAsPassword"];
                this.maxChars = o["maxChars"];
            }
        };
        AITextField.prototype.clone = function () {
            var cl = _super.prototype.clone.call(this);
            cl.fontFamily = this.fontFamily;
            cl.textColor = this.textColor;
            cl.size = this.size;
            cl.textAlign = this.textAlign;
            cl.verticalAlign = this.verticalAlign;
            cl.italic = this.italic;
            cl.border = this.border;
            cl.borderColor = this.borderColor;
            cl.background = this.background;
            cl.backgourndColor = this.backgourndColor;
            cl.text = this.text;
            cl.italic = this.italic;
            cl.enableInput = this.enableInput;
            cl.bold = this.bold;
            cl.displayAsPassword = this.displayAsPassword;
            cl.maxChars = this.maxChars;
            return cl;
        };
        return AITextField;
    }(ls.AIDisplayObject));
    ls.AITextField = AITextField;
    __reflect(AITextField.prototype, "ls.AITextField");
    var CompareTFTextEvent = (function (_super) {
        __extends(CompareTFTextEvent, _super);
        function CompareTFTextEvent() {
            return _super.call(this) || this;
        }
        return CompareTFTextEvent;
    }(ls.BaseEvent));
    ls.CompareTFTextEvent = CompareTFTextEvent;
    __reflect(CompareTFTextEvent.prototype, "ls.CompareTFTextEvent");
    var OnTextFocusInEvent = (function (_super) {
        __extends(OnTextFocusInEvent, _super);
        function OnTextFocusInEvent() {
            return _super.apply(this, arguments) || this;
        }
        return OnTextFocusInEvent;
    }(ls.BaseEvent));
    ls.OnTextFocusInEvent = OnTextFocusInEvent;
    __reflect(OnTextFocusInEvent.prototype, "ls.OnTextFocusInEvent");
    var OnTextFocusOutEvent = (function (_super) {
        __extends(OnTextFocusOutEvent, _super);
        function OnTextFocusOutEvent() {
            return _super.apply(this, arguments) || this;
        }
        return OnTextFocusOutEvent;
    }(ls.BaseEvent));
    ls.OnTextFocusOutEvent = OnTextFocusOutEvent;
    __reflect(OnTextFocusOutEvent.prototype, "ls.OnTextFocusOutEvent");
    var OnTextChangeEvent = (function (_super) {
        __extends(OnTextChangeEvent, _super);
        function OnTextChangeEvent() {
            return _super.apply(this, arguments) || this;
        }
        return OnTextChangeEvent;
    }(ls.BaseEvent));
    ls.OnTextChangeEvent = OnTextChangeEvent;
    __reflect(OnTextChangeEvent.prototype, "ls.OnTextChangeEvent");
})(ls || (ls = {}));
