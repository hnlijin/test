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
var JoystickCommon = (function (_super) {
    __extends(JoystickCommon, _super);
    function JoystickCommon() {
        var _this = _super.call(this) || this;
        _this.joystickBG = null;
        _this.joystickDot = null;
        _this.radius = 100;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.touchEnabled = true;
        _this.joystickBG = new egret.Bitmap();
        var texture = RES.getRes("JoystickBG_png");
        _this.joystickBG.texture = texture;
        _this.addChild(_this.joystickBG);
        _this.joystickDot = new egret.Bitmap();
        var texture = RES.getRes("Joystick_png");
        _this.joystickDot.texture = texture;
        _this.addChild(_this.joystickDot);
        _this.radius = _this.joystickBG.width / 2 - _this.joystickDot.width / 3;
        _this.resetPosition();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    JoystickCommon.prototype.resetPosition = function () {
        this.joystickBG.x = -this.joystickBG.width / 2;
        this.joystickBG.y = -this.joystickBG.height / 2;
        this.joystickDot.x = -this.joystickDot.width / 2;
        this.joystickDot.y = -this.joystickDot.height / 2;
    };
    JoystickCommon.prototype.onAddToStage = function (evt) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
    };
    JoystickCommon.prototype.onTouchBegin = function (evt) {
    };
    JoystickCommon.prototype.onTouchMove = function (evt) {
        var p = this.globalToLocal(evt.stageX, evt.stageY);
        var lx = p.x;
        var ly = p.y;
        if (Math.abs(lx) > this.radius) {
            if (lx > 0) {
                lx = this.radius;
            }
            else if (lx < 0) {
                lx = -this.radius;
            }
        }
        if (Math.abs(ly) > this.radius) {
            if (ly > 0) {
                ly = this.radius;
            }
            else if (ly < 0) {
                ly = -this.radius;
            }
        }
        this.joystickDot.x = lx - this.joystickDot.width / 2;
        this.joystickDot.y = ly - this.joystickDot.height / 2;
        if (this.offsetX != lx || this.offsetY != ly) {
            this.offsetX = lx;
            this.offsetY = ly;
            this.dispatchEvent(new egret.Event(egret.Event.CHANGE, false, false, { x: this.offsetX, y: this.offsetY }));
        }
    };
    JoystickCommon.prototype.onTouchEnd = function (evt) {
        this.resetPosition();
    };
    JoystickCommon.prototype.onTouchCancel = function (evt) {
        this.resetPosition();
    };
    return JoystickCommon;
}(egret.DisplayObjectContainer));
__reflect(JoystickCommon.prototype, "JoystickCommon");
