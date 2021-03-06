/**
 *
 * @author
 *
 */
var JoystickCommon = (function (_super) {
    __extends(JoystickCommon, _super);
    function JoystickCommon() {
        _super.call(this);
        this.joystickBG = null;
        this.joystickDot = null;
        this.radius = 100;
        this.offsetX = 0;
        this.offsetY = 0;
        this._enabled = true;
        this.touchEnabled = true;
        this.joystickBG = new egret.Bitmap();
        var texture = RES.getRes("JoystickBG_png");
        this.joystickBG.texture = texture;
        this.addChild(this.joystickBG);
        this.joystickDot = new egret.Bitmap();
        var texture = RES.getRes("Joystick_png");
        this.joystickDot.texture = texture;
        this.addChild(this.joystickDot);
        this.radius = this.joystickBG.width / 2 - this.joystickDot.width / 3;
        this.resetPosition();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=JoystickCommon,p=c.prototype;
    d(p, "enabled"
        ,function () {
            return this._enabled;
        }
        ,function (value) {
            this._enabled = value;
        }
    );
    p.resetPosition = function () {
        this.joystickBG.x = -this.joystickBG.width / 2;
        this.joystickBG.y = -this.joystickBG.height / 2;
        this.joystickDot.x = -this.joystickDot.width / 2;
        this.joystickDot.y = -this.joystickDot.height / 2;
        this.offsetX = 0;
        this.offsetY = 0;
    };
    p.onAddToStage = function (evt) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
    };
    p.onTouchBegin = function (evt) {
    };
    p.onTouchMove = function (evt) {
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
            this.offsetX = Math.ceil(lx / this.radius * 100);
            this.offsetY = Math.ceil(ly / this.radius * 100);
            this.sendEvent();
        }
    };
    p.onTouchEnd = function (evt) {
        this.resetPosition();
        this.sendEvent();
    };
    p.onTouchCancel = function (evt) {
        this.resetPosition();
        this.sendEvent();
    };
    p.sendEvent = function () {
        if (this._enabled) {
            console.log("pos,", this.offsetX, this.offsetY);
            this.dispatchEvent(new egret.Event(egret.Event.CHANGE, false, false, { x: this.offsetX, y: this.offsetY }));
        }
    };
    return JoystickCommon;
}(egret.DisplayObjectContainer));
egret.registerClass(JoystickCommon,'JoystickCommon');
//# sourceMappingURL=JoystickCommon.js.map