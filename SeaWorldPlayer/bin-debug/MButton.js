var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var MButton = (function (_super) {
    __extends(MButton, _super);
    function MButton(color, wid, hei, title, fontSize) {
        if (fontSize === void 0) { fontSize = 20; }
        var _this = _super.call(this) || this;
        _this._label = null;
        _this._btnWidth = 100;
        _this._btnHeight = 100;
        _this._btnWidth = wid;
        _this._btnHeight = hei;
        _this.graphics.beginFill(color);
        _this.graphics.drawRect(0, 0, wid, hei);
        _this._label = new egret.TextField();
        _this._label.size = fontSize;
        _this._label.text = title;
        _this.addChild(_this._label);
        _this.updateLayout();
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegin, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onTouchCancel, _this);
        return _this;
    }
    Object.defineProperty(MButton.prototype, "label", {
        get: function () {
            return this._label.text;
        },
        set: function (title) {
            this._label.text = title;
            this.updateLayout();
        },
        enumerable: true,
        configurable: true
    });
    MButton.prototype.onTouchBegin = function (evt) {
        this.alpha = 0.8;
    };
    MButton.prototype.onTouchEnd = function (evt) {
        this.alpha = 1;
    };
    MButton.prototype.onTouchCancel = function (evt) {
        this.alpha = 1;
    };
    MButton.prototype.updateLayout = function () {
        this._label.x = (this._btnWidth - this._label.width) / 2;
        this._label.y = (this._btnHeight - this._label.height) / 2;
    };
    return MButton;
}(egret.Sprite));
__reflect(MButton.prototype, "MButton");
