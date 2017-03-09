var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.sourceMaskHeight = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        ls.GameUILayer.init(this.stage);
        this.onPreResourceLoad();
    };
    Main.prototype.onPreResourceLoad = function () {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        var groups = RES.getGroupByName("preload");
        if (groups == null || groups.length == 0) {
            this.onMergeResourceLoad();
        }
        else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onPreloadGroupComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onPreloadGroupError, this);
            RES.loadGroup("preload");
        }
    };
    Main.prototype.onPreloadGroupComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onPreloadGroupComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onPreloadGroupError, this);
            this.onPreloadRender();
        }
    };
    Main.prototype.onPreloadRender = function () {
        var stageW = ls.GameUILayer.stage.stageWidth;
        var stageH = ls.GameUILayer.stage.stageHeight;
        this.preIcon = new egret.Bitmap();
        var preTexture = RES.getRes("egretIcon");
        this.preIcon.texture = preTexture;
        var scaleRate = 0.4;
        var stageScale = stageW / stageH;
        var preIconScale = preTexture.textureWidth / preTexture.textureHeight;
        var realScale;
        if (stageScale > preIconScale)
            realScale = scaleRate * stageH / preTexture.textureHeight;
        else
            realScale = scaleRate * stageW / preTexture.textureWidth;
        this.preIcon.width = realScale * preTexture.textureWidth;
        this.preIcon.height = realScale * preTexture.textureHeight;
        this.preIcon.x = (stageW - this.preIcon.width) >> 1;
        this.preIcon.y = ((stageH - this.preIcon.height) >> 1) - 30;
        ls.GameUILayer.preContainer.addChild(this.preIcon);
        this.preIconMask = new egret.Bitmap();
        this.preIconMask.texture = RES.getRes("egretIcon");
        this.preIconMask.width = this.preIcon.width;
        this.preIconMask.height = this.preIcon.height;
        this.preIconMask.x = this.preIcon.x;
        this.preIconMask.y = this.preIcon.y;
        ls.GameUILayer.preContainer.addChild(this.preIconMask);
        this.beMaskShape = new egret.Shape();
        this.beMaskShape.graphics.beginFill(0x32d0d9);
        this.beMaskShape.graphics.drawRect(0, 0, this.preIconMask.width, 1);
        this.beMaskShape.graphics.endFill();
        this.beMaskShape.x = this.preIconMask.x;
        this.beMaskShape.y = this.preIconMask.y;
        this.sourceMaskHeight = this.preIconMask.height;
        ls.GameUILayer.preContainer.addChild(this.beMaskShape);
        this.beMaskShape.mask = this.preIconMask;
        var limitGroups = RES.getGroupByName("limit");
        this.isHasLimitResource = !(limitGroups == null || limitGroups.length == 0);
        this.onConfigResourceLoad();
    };
    Main.prototype.onPreloadGroupError = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onPreloadGroupComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onPreloadGroupError, this);
            this.onConfigResourceLoad();
        }
    };
    Main.prototype.onConfigResourceLoad = function () {
        var groups = RES.getGroupByName("config");
        if (groups == null || groups.length == 0) {
            this.onMergeResourceLoad();
        }
        else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onConfigResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onConfigResourceProgress, this);
            RES.loadGroup("config");
        }
    };
    Main.prototype.onConfigResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onConfigResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onConfigResourceProgress, this);
        var groups = RES.getGroupByName("config");
        if (groups == null || groups.length == 0)
            return;
        for (var i = 0; i < groups.length; i++) {
            var resourceItem = groups[i];
            ls.ResCache.configResouces[resourceItem.name] = RES.getRes(resourceItem.name);
        }
        this.onMergeResourceLoad();
    };
    Main.prototype.onConfigResourceLoadError = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onConfigResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onConfigResourceProgress, this);
        ls.assert(true, "配置文件加载错误！！！");
    };
    Main.prototype.onConfigResourceProgress = function (event) {
        this.updateMask(event.itemsLoaded, event.itemsTotal, 0);
    };
    Main.prototype.onMergeResourceLoad = function () {
        var groups = RES.getGroupByName("resourceMerge");
        if (groups == null || groups.length == 0) {
            this.onLimitResourceLoad();
        }
        else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onMergeResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onMergeResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onMergeResourceProgress, this);
            RES.loadGroup("resourceMerge");
        }
    };
    Main.prototype.onMergeResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onMergeResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onMergeResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onMergeResourceProgress, this);
        var groups = RES.getGroupByName("resourceMerge");
        if (groups == null || groups.length == 0)
            return;
        for (var i = 0; i < groups.length; i++) {
            var resourceItem = groups[i];
            if (resourceItem.type == "json") {
                var jsonData = RES.getRes(resourceItem.name);
                var imageFile = jsonData.file;
                var imageTexture = RES.getRes(imageFile);
                this.decodeMerge(jsonData, imageTexture);
            }
        }
        this.onLimitResourceLoad();
    };
    Main.prototype.decodeMerge = function (json, texture) {
        if (json && texture) {
            var spriteSheetFrames = json.frames;
            var spritesheet = new egret.SpriteSheet(texture);
            for (var key in spriteSheetFrames) {
                var spriteObject = spriteSheetFrames[key];
                var itemTexture = spritesheet.createTexture(key, spriteObject.x, spriteObject.y, spriteObject.sourceW, spriteObject.sourceH, spriteObject.offX, spriteObject.offY, spriteObject.sourceW, spriteObject.sourceH);
                ls.LayoutDecoder.spriteSheetDatas["resource/userAsset/" + key] = { offsetX: spriteObject.offX, offsetY: spriteObject.offY, texture: itemTexture };
            }
        }
    };
    Main.prototype.onMergeResourceLoadError = function (event) {
        this.onLimitResourceLoad();
    };
    Main.prototype.onMergeResourceProgress = function (event) {
        this.updateMask(event.itemsLoaded, event.itemsTotal, 1);
    };
    Main.prototype.updateMask = function (itemsLoaded, itemsTotal, type) {
        if (this.beMaskShape) {
            this.beMaskShape.graphics.clear();
            this.beMaskShape.graphics.beginFill(0x32d0d9);
            if (type == 0) {
                if (this.isHasLimitResource)
                    this.beMaskShape.graphics.drawRect(0, 0, this.preIconMask.width, itemsLoaded / itemsTotal * this.sourceMaskHeight * 0.7);
                else
                    this.beMaskShape.graphics.drawRect(0, 0, this.preIconMask.width, itemsLoaded / itemsTotal * this.sourceMaskHeight);
            }
            else {
                this.beMaskShape.graphics.drawRect(0, 0, this.preIconMask.width, (itemsLoaded / itemsTotal + 0.7) * this.sourceMaskHeight);
            }
            this.beMaskShape.graphics.endFill();
        }
    };
    Main.prototype.onLimitResourceLoad = function () {
        var groups = RES.getGroupByName("limit");
        if (groups == null || groups.length == 0) {
            this.onComponentsResourceLoad();
        }
        else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLimitResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLimitResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLimitResourceProgress, this);
            RES.loadGroup("limit");
        }
    };
    Main.prototype.onLimitResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLimitResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLimitResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLimitResourceProgress, this);
        var groups = RES.getGroupByName("limit");
        if (groups == null || groups.length == 0)
            return;
        for (var i = 0; i < groups.length; i++) {
            var resourceItem = groups[i];
            var imageTexture = RES.getRes(resourceItem.name);
            ls.LayoutDecoder.spriteSheetDatas["resource/userAsset/" + resourceItem.name] = { offsetX: 0, offsetY: 0, texture: imageTexture };
        }
        this.onComponentsResourceLoad();
    };
    Main.prototype.onLimitResourceLoadError = function (event) {
        this.onComponentsResourceLoad();
    };
    Main.prototype.onLimitResourceProgress = function (event) {
        this.updateMask(event.itemsLoaded, event.itemsTotal, 2);
    };
    Main.prototype.onComponentsResourceLoad = function () {
        var groups = RES.getGroupByName("components");
        if (groups == null || groups.length == 0) {
            this.onStart();
        }
        else {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onComponentsResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onComponentsResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onComponentsResourceProgress, this);
            RES.loadGroup("components");
        }
    };
    Main.prototype.onComponentsResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onComponentsResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onComponentsResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onComponentsResourceProgress, this);
        var groups = RES.getGroupByName("components");
        if (groups == null || groups.length == 0)
            return;
        for (var i = 0; i < groups.length; i++) {
            var resourceItem = groups[i];
            var data = RES.getRes(resourceItem.name);
            ls.ResCache.componentResources[resourceItem.url] = data;
        }
        this.onStart();
    };
    Main.prototype.onComponentsResourceLoadError = function (event) {
        this.onStart();
    };
    Main.prototype.onComponentsResourceProgress = function (event) {
        this.updateMask(event.itemsLoaded, event.itemsTotal, 3);
    };
    Main.prototype.onStart = function () {
        ls.GameUILayer.preContainer.alpha = 1;
        var self = this;
        var tween = egret.Tween.get(ls.GameUILayer.preContainer);
        tween.wait(500);
        tween.to({ "alpha": 0 }, 250).call(function () {
            if (ls.GameUILayer.preContainer.parent)
                ls.GameUILayer.preContainer.parent.removeChild(ls.GameUILayer.preContainer);
            ls.StartUp.execute(self);
        });
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
