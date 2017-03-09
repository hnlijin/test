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
    var AITiledBackground = (function (_super) {
        __extends(AITiledBackground, _super);
        function AITiledBackground() {
            var _this = _super.call(this) || this;
            _this.name = "tiledBackground";
            _this.snapPixelsEnabled = true;
            _this.container.addChild(_this._bitmap);
            return _this;
        }
        AITiledBackground.prototype.initialize = function () {
            var url = this["url"];
            this._bitmapURL = url;
            var self = this;
            var textureDatas = ls.getTexture(url);
            if (textureDatas != null)
                var texture = textureDatas[0];
            if (texture != null) {
                this._bitmap.texture = texture;
                this._bitmap.fillMode = egret.BitmapFillMode.REPEAT;
                this._bitmap.width = this.width;
                this._bitmap.height = this.height;
                this._bitmap.x = textureDatas[1];
                this._bitmap.y = textureDatas[2];
                this._sourceWidth = texture.textureWidth;
                this._sourceHeight = texture.textureHeight;
                this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onResourceLoaded));
            }
            else {
                var onRESComplete = function (texture) {
                    if (texture) {
                        self._bitmap.texture = texture;
                        self._bitmap.fillMode = egret.BitmapFillMode.REPEAT;
                        self._bitmap.width = self.width;
                        self._bitmap.height = self.height;
                        self._sourceWidth = texture.textureWidth;
                        self._sourceHeight = texture.textureHeight;
                        self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.onResourceLoaded));
                    }
                };
                RES.getResByUrl(url, onRESComplete, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        AITiledBackground.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["url"] = this["url"];
            return o;
        };
        AITiledBackground.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
                this["url"] = o["url"];
            }
        };
        AITiledBackground.prototype.clone = function () {
            var cl = _super.prototype.clone.call(this);
            cl["url"] = this["url"];
            return cl;
        };
        return AITiledBackground;
    }(ls.AISprite));
    ls.AITiledBackground = AITiledBackground;
    __reflect(AITiledBackground.prototype, "ls.AITiledBackground");
})(ls || (ls = {}));
