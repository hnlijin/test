/**
 *
 * @author
 *
 */
var MButton = (function (_super) {
    __extends(MButton, _super);
    function MButton(color, wid, hei, title, fontSize) {
        if (fontSize === void 0) { fontSize = 20; }
        _super.call(this);
        this._label = null;
        this._btnWidth = 100;
        this._btnHeight = 100;
        this._btnWidth = wid;
        this._btnHeight = hei;
        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, wid, hei);
        this._label = new egret.TextField();
        this._label.size = fontSize;
        this._label.text = title;
        this.addChild(this._label);
        this.updateLayout();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
    }
    var d = __define,c=MButton,p=c.prototype;
    d(p, "label"
        ,function () {
            return this._label.text;
        }
        ,function (title) {
            this._label.text = title;
            this.updateLayout();
        }
    );
    p.onTouchBegin = function (evt) {
        this.alpha = 0.8;
    };
    p.onTouchEnd = function (evt) {
        this.alpha = 1;
    };
    p.onTouchCancel = function (evt) {
        this.alpha = 1;
    };
    p.updateLayout = function () {
        this._label.x = (this._btnWidth - this._label.width) / 2;
        this._label.y = (this._btnHeight - this._label.height) / 2;
    };
    return MButton;
}(egret.Sprite));
egret.registerClass(MButton,'MButton');
//# sourceMappingURL=MButton.js.map