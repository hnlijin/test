/**
 *
 * @author
 *
 */
var PlayerView = (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(gameObject) {
        _super.call(this);
        this.gameObject = gameObject;
        this.view = new egret.Sprite();
        this.gameObject.addChild(this.view);
        this.label = new egret.TextField();
        this.label.textColor = 0x00ff00;
        this.label.text = this.gameObject.data["name"];
        this.view.addChild(this.label);
    }
    var d = __define,c=PlayerView,p=c.prototype;
    p.onEnter = function () {
        this.view.graphics.clear();
        this.view.graphics.beginFill(0xff0000);
        this.view.graphics.drawRect(0, 0, 60, 30);
        this.view.graphics.endFill();
    };
    p.onExit = function () {
        this.view.graphics.clear();
        if (this.view.parent != null) {
            this.view.parent.removeChild(this.view);
        }
    };
    return PlayerView;
}(Component));
egret.registerClass(PlayerView,'PlayerView');
//# sourceMappingURL=PlayerView.js.map