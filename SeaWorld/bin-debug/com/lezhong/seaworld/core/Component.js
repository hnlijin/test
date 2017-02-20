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
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super.call(this) || this;
    }
    Component.prototype.onEnter = function () {
    };
    Component.prototype.onEixt = function () {
    };
    return Component;
}(egret.EventDispatcher));
__reflect(Component.prototype, "Component");
