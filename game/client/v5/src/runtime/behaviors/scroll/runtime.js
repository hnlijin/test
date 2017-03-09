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
    var ScrollBehaivor = (function (_super) {
        __extends(ScrollBehaivor, _super);
        function ScrollBehaivor() {
            var _this = _super.call(this) || this;
            _this.scrollDirectionType = BehaivorType.scrollDown;
            _this.speed = 0;
            _this.active = 1;
            return _this;
        }
        ScrollBehaivor.prototype.onCreate = function () {
            if (this.isCreated)
                return;
            this.scrollDirectionType = ls.eval_e(this.scrollDirectionType);
            this.copyInst = this.inst.clone();
            this.copyInst.initialize();
            this.copyInst.onCreate();
            if (this.inst instanceof ls.AIDisplayObject)
                this.inst.cloneBehavior(this.copyInst);
            this.copyInst.layer = this.inst.layer;
            var index = -1;
            for (var i = 0, l = this.inst.container.parent.numChildren; i < l; i++) {
                var instContainer = this.inst.container.parent.getChildAt(i);
                if (instContainer == this.inst.container) {
                    index = i;
                    break;
                }
            }
            ls.World.getInstance().addChildLayerAt(this.copyInst, this.inst.layer, index);
            switch (this.scrollDirectionType) {
                case BehaivorType.scrollUp:
                    this.copyInst.x = this.inst.x;
                    this.copyInst.y = this.inst.y + this.inst.height;
                    break;
                case BehaivorType.scrollDown:
                    this.copyInst.x = this.inst.x;
                    this.copyInst.y = this.inst.y - this.inst.height;
                    break;
                case BehaivorType.scrollLeft:
                    this.copyInst.x = this.inst.x + this.inst.width;
                    this.copyInst.y = this.inst.y;
                    break;
                case BehaivorType.scrollRight:
                    this.copyInst.x = this.inst.x - this.inst.width;
                    this.copyInst.y = this.inst.y;
                    break;
            }
        };
        ScrollBehaivor.prototype.tick = function () {
            this.active = ls.eval_e(this.active);
            if (this.active != 1)
                return;
            var speed = ls.eval_e(this.speed);
            ls.assert(typeof speed !== "number", "ScrollBehaivor speed parameter type incorrect!!");
            var aiSprite = this.inst;
            if (aiSprite) {
                var perSecondSpeed = speed / 60;
                switch (this.scrollDirectionType) {
                    case BehaivorType.scrollUp:
                        aiSprite.y -= perSecondSpeed;
                        if (aiSprite.y < -aiSprite.height + aiSprite.anchorY * aiSprite.height)
                            aiSprite.y += 2 * aiSprite.height;
                        break;
                    case BehaivorType.scrollDown:
                        aiSprite.y += perSecondSpeed;
                        if (aiSprite.y > aiSprite.height + aiSprite.anchorY * aiSprite.height)
                            aiSprite.y += -2 * aiSprite.height;
                        break;
                    case BehaivorType.scrollLeft:
                        aiSprite.x -= perSecondSpeed;
                        if (aiSprite.x < -aiSprite.width + aiSprite.anchorX * aiSprite.width)
                            aiSprite.x += 2 * aiSprite.width;
                        break;
                    case BehaivorType.scrollRight:
                        aiSprite.x += perSecondSpeed;
                        if (aiSprite.x > aiSprite.width + aiSprite.anchorX * aiSprite.width)
                            aiSprite.x += -2 * aiSprite.width;
                        break;
                }
            }
        };
        ScrollBehaivor.prototype.setActive = function (active) {
            this.active = ls.eval_e(active);
        };
        ScrollBehaivor.prototype.setScrollDirection = function (direction) {
            this.scrollDirectionType = ls.eval_e(direction);
        };
        ScrollBehaivor.prototype.setScrollSpeed = function (speed) {
            this.speed = ls.eval_e(speed);
        };
        ScrollBehaivor.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o.scrollDirectionType = this.scrollDirectionType;
            o.speed = this.speed;
            return o;
        };
        ScrollBehaivor.prototype.loadFromJSON = function (o) {
            if (o) {
                this.scrollDirectionType = o.scrollDirectionType;
                this.speed = o.speed;
                _super.prototype.loadFromJSON.call(this, o);
            }
        };
        ScrollBehaivor.prototype.clone = function () {
            var bh = _super.prototype.clone.call(this);
            bh.scrollDirectionType = this.scrollDirectionType;
            bh.speed = this.speed;
            return bh;
        };
        return ScrollBehaivor;
    }(ls.BaseBehavior));
    ls.ScrollBehaivor = ScrollBehaivor;
    __reflect(ScrollBehaivor.prototype, "ls.ScrollBehaivor");
    var BehaivorType = (function () {
        function BehaivorType() {
        }
        return BehaivorType;
    }());
    BehaivorType.scrollUp = "scrollUp";
    BehaivorType.scrollDown = "scrollDown";
    BehaivorType.scrollLeft = "scrollLeft";
    BehaivorType.scrollRight = "scrollRight";
    ls.BehaivorType = BehaivorType;
    __reflect(BehaivorType.prototype, "ls.BehaivorType");
})(ls || (ls = {}));
