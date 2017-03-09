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
    var AIDragonBones = (function (_super) {
        __extends(AIDragonBones, _super);
        function AIDragonBones() {
            var _this = _super.call(this) || this;
            _this._playOrder = 1;
            _this.isPlayDefault = true;
            _this.playTimes = 0;
            _this.curPlayedTimes = 0;
            _this.isRealPlaying = false;
            _this._dbScaleX = 1;
            _this._dbScaleY = 1;
            _this.name = "dragonBones";
            _this._onComplete = _this.onComplete;
            _this._dbContainer = new egret.Sprite();
            return _this;
        }
        AIDragonBones.prototype.initialize = function () {
            this._url = decodeURIComponent(this["url"]);
            this._textureConfigUrl = decodeURIComponent(this["textureConfigUrl"]);
            this._armatureUrl = decodeURIComponent(this["skeletonUrl"]);
            this.isPlayDefault = decodeURIComponent(this["isPlayDefault"]) === "true";
            this.playTimes = ls.eval_e(decodeURIComponent(this["playTimes"]));
            this.defaultAnimation = decodeURIComponent(this["animationName"]);
            this.defaultArmature = decodeURIComponent(this["armatureName"]);
            this.container.addChild(this._dbContainer);
            RES.getResByUrl(this._url, this.onTextureLoadComplete, this, RES.ResourceItem.TYPE_IMAGE);
        };
        AIDragonBones.prototype.onTextureLoadComplete = function (texture) {
            this.texture = texture;
            var textureConfigData = ls.ResCache.componentResources[this._textureConfigUrl];
            if (textureConfigData)
                this.onTextureConfigRESComplete(textureConfigData);
            else
                RES.getResByUrl(this._textureConfigUrl, this.onTextureConfigRESComplete, this, RES.ResourceItem.TYPE_JSON);
        };
        AIDragonBones.prototype.onTextureConfigRESComplete = function (textureConfig) {
            this._textureConfig = textureConfig;
            this._armateName = this._textureConfig.name;
            ls.ResCache.componentResources[this._textureConfigUrl] = textureConfig;
            var armatureData = ls.ResCache.componentResources[this._armatureUrl];
            if (armatureData)
                this.onSkeletonConfigRESComplete(armatureData);
            else {
                RES.getResByUrl(this._armatureUrl, this.onSkeletonConfigRESComplete, this, RES.ResourceItem.TYPE_JSON);
            }
        };
        AIDragonBones.prototype.onSkeletonConfigRESComplete = function (armatureData) {
            this._armatureConfig = armatureData;
            ls.ResCache.componentResources[this._armatureUrl] = armatureData;
            if (this._armatureConfig.name != this._armateName)
                ls.assert(true, "纹理配置文件与骨骼配置文件不匹配！！！");
            if (this._onComplete != null)
                this._onComplete();
        };
        AIDragonBones.prototype.onComplete = function () {
            this.factory = new dragonBones.EgretFactory();
            this.factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(this._armatureConfig));
            this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(this.texture, this._textureConfig));
            this._dragonBonesData = this.factory.getDragonBonesData(this._armatureConfig.name);
            this.currentArmatureData = this._dragonBonesData.armatures[this.defaultArmature ? this.defaultArmature : this._dragonBonesData.armatureNames[0]];
            if (this.currentArmatureData)
                this.currentAnimationData = this.currentArmatureData.getAnimation(this.defaultAnimation);
            if (this.currentArmatureData && this.currentAnimationData) {
                this.armature = this.factory.buildArmature(this.currentArmatureData.name);
                this.armatureDisplay = this.armature.display;
                this._rootX = this.armature.getBones()[0].global.x;
                this._rootY = this.armature.getBones()[0].global.y;
                this._dbScaleX = this.width / this.currentArmatureData.aabb.width;
                this._dbScaleY = this.height / this.currentArmatureData.aabb.height;
                var centerX = (this.currentArmatureData.aabb.x * 2 + this.currentArmatureData.aabb.width) >> 1;
                var centerY = (this.currentArmatureData.aabb.y * 2 + this.currentArmatureData.aabb.height) >> 1;
                this._offsetX = centerX - this._rootX;
                this._offsetY = centerY - this._rootY;
                this.armatureDisplay.scaleX = this._dbScaleX;
                this.armatureDisplay.scaleY = this._dbScaleY;
                this.armatureDisplay.x = -this.currentArmatureData.aabb.x * this._dbScaleX;
                this.armatureDisplay.y = -this.currentArmatureData.aabb.y * this._dbScaleY;
                this._isComplete = true;
                this._dbContainer.addChild(this.armatureDisplay);
                dragonBones.WorldClock.clock.add(this.armature);
                if (this.isPlayDefault) {
                    this.armature.animation.play(this.defaultAnimation, this.playTimes);
                    this.isRealPlaying = true;
                }
                else {
                    this.armature.animation.stop();
                    this.isRealPlaying = false;
                }
                this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onResourceLoaded));
                this.armature.addEventListener(dragonBones.AnimationEvent.START, this.onStartPlayHanlder, this);
                this.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onLoopCompleteHanlder, this);
                this.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAllLoopCompleteHanlder, this);
            }
        };
        AIDragonBones.prototype.onStartPlayHanlder = function (event) {
            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onPlayStart));
        };
        AIDragonBones.prototype.onLoopCompleteHanlder = function (event) {
            this.curPlayedTimes++;
            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onLoopComplete));
        };
        AIDragonBones.prototype.onAllLoopCompleteHanlder = function (event) {
            this.curPlayedTimes++;
            this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onAllLoopComplete));
            this.isRealPlaying = false;
        };
        AIDragonBones.prototype.onTick = function () {
            if (!this._isComplete)
                return;
            dragonBones.WorldClock.clock.advanceTime(-1);
        };
        AIDragonBones.prototype.changeArmature = function (armatureName, animationName) {
            if (this._isComplete) {
                this._isComplete = false;
                armatureName = ls.eval_e(armatureName);
                animationName = ls.eval_e(animationName);
                if (this.armatureDisplay && this.armatureDisplay.parent)
                    this.armatureDisplay.parent.removeChild(this.armatureDisplay);
                if (this.armature) {
                    dragonBones.WorldClock.clock.remove(this.armature);
                    this.armature.removeEventListener(dragonBones.AnimationEvent.START, this.onStartPlayHanlder, this);
                    this.armature.removeEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onLoopCompleteHanlder, this);
                    this.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAllLoopCompleteHanlder, this);
                    this.armature.dispose();
                    this.armatureDisplay.dispose();
                }
                this.currentArmatureData = this._dragonBonesData.armatures[armatureName];
                if (!this.currentArmatureData)
                    return;
                this.currentAnimationData = this.currentArmatureData.getAnimation(animationName);
                if (!this.currentAnimationData)
                    return;
                var isError = false;
                try {
                    this.armature = this.factory.buildArmature(armatureName);
                }
                catch (err) {
                    isError = true;
                }
                if (isError)
                    return;
                this.armatureDisplay = this.armature.display;
                this.armatureDisplay.scaleX = this._dbScaleX;
                this.armatureDisplay.scaleY = this._dbScaleY;
                this.armatureDisplay.x = -this.currentArmatureData.aabb.x * this.armatureDisplay.scaleX;
                this.armatureDisplay.y = -this.currentArmatureData.aabb.y * this.armatureDisplay.scaleY;
                this._isComplete = true;
                this._dbContainer.addChild(this.armatureDisplay);
                dragonBones.WorldClock.clock.add(this.armature);
                this.armature.animation.play(animationName, this.playTimes);
                this.isRealPlaying = true;
                this.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, this.onResourceLoaded));
                this.armature.addEventListener(dragonBones.AnimationEvent.START, this.onStartPlayHanlder, this);
                this.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onLoopCompleteHanlder, this);
            }
        };
        AIDragonBones.prototype.setAnimationTimeScale = function (timeScale) {
            if (this._isComplete) {
                this.armature.animation.timeScale = ls.eval_e(timeScale);
            }
        };
        AIDragonBones.prototype.setPlayTimes = function (playTimes) {
            if (this._isComplete) {
                this.playTimes = ls.eval_e(playTimes);
                var animationState = this.armature.animation.getState(this.currentAnimationName);
                if (animationState)
                    animationState.playTimes = this.playTimes;
            }
        };
        AIDragonBones.prototype.play = function () {
            if (this._isComplete) {
                this.armature.animation.play(this.currentAnimationName, this.playTimes);
                this.isRealPlaying = true;
            }
        };
        AIDragonBones.prototype.gotoAndPlayByFrame = function (frame) {
            if (frame === void 0) { frame = 0; }
            if (this._isComplete) {
                frame = ls.eval_e(frame);
                this.armature.animation.gotoAndPlayByFrame(this.currentAnimationName, frame, this.playTimes);
                this.isRealPlaying = true;
            }
        };
        AIDragonBones.prototype.gotoAndPlayByProgress = function (progress) {
            if (this._isComplete) {
                progress = ls.eval_e(progress);
                this.armature.animation.gotoAndPlayByProgress(this.currentAnimationName, progress, this.playTimes);
                this.isRealPlaying = true;
            }
        };
        AIDragonBones.prototype.gotoAndPlayByTime = function (time) {
            if (this._isComplete) {
                time = ls.eval_e(time);
                this.armature.animation.gotoAndPlayByTime(this.currentAnimationName, time, this.playTimes);
                this.isRealPlaying = true;
            }
        };
        AIDragonBones.prototype.gotoAndStopByFrame = function (frame) {
            if (this._isComplete) {
                frame = ls.eval_e(frame);
                this.armature.animation.gotoAndStopByFrame(this.currentAnimationName, frame);
            }
        };
        AIDragonBones.prototype.gotoNextFrame = function (isRecycle) {
            if (this._isComplete) {
                isRecycle = ls.eval_e(isRecycle);
                var _curFame = this.currentFrame;
                var _totalFrame = this.totalFrame;
                var nextFrame;
                if (isRecycle == 1)
                    nextFrame = (_curFame + 1);
                else {
                    if (this.totalFrame == 0)
                        nextFrame = 0;
                    else
                        nextFrame = (_curFame + 1) % _totalFrame;
                }
                this.armature.animation.gotoAndStopByFrame(this.currentAnimationName, nextFrame);
            }
        };
        AIDragonBones.prototype.gotoPrevFrame = function (isRecycle) {
            if (this._isComplete) {
                isRecycle = ls.eval_e(isRecycle);
                var _curFame = this.currentFrame;
                var _totalFrame = this.totalFrame;
                var prevFrame;
                if (isRecycle == 1) {
                    prevFrame = (_curFame <= 0 ? 0 : (_curFame - 1));
                }
                else {
                    if (this.totalFrame == 0)
                        prevFrame = 0;
                    else
                        prevFrame = (_curFame - 1 + _totalFrame) % _totalFrame;
                }
                this.armature.animation.gotoAndStopByFrame(this.currentAnimationName, prevFrame);
            }
        };
        AIDragonBones.prototype.setDBPlayOrder = function (order) {
            if (this._isComplete) {
                var order = ls.eval_e(order);
                this._playOrder = order || 1;
                var animationState = this.armature.animation.getState(this.currentAnimationName);
                if (animationState)
                    animationState.timeScale = (order == 1 ? 1 : -1);
            }
        };
        AIDragonBones.prototype.gotoAndStopByProgress = function (progress) {
            if (this._isComplete) {
                progress = ls.eval_e(progress);
                this.armature.animation.gotoAndStopByProgress(this.currentAnimationName, progress);
            }
        };
        AIDragonBones.prototype.gotoAndStopByTime = function (time) {
            if (this._isComplete) {
                time = ls.eval_e(time);
                this.armature.animation.gotoAndStopByTime(this.currentAnimationName, time);
            }
        };
        AIDragonBones.prototype.stop = function () {
            if (this._isComplete) {
                this.armature.animation.stop(this.currentAnimationName);
                this.isRealPlaying = false;
            }
        };
        AIDragonBones.prototype.hasAnimation = function (event) {
            return { instances: [this], status: this._isComplete && this.currentAnimationName == ls.eval_e(event.animationName) && this.currentArmatureData.name == ls.eval_e(event.armatureName) };
        };
        AIDragonBones.prototype.compareSkeletonAction = function (event) {
            return { instances: [this], status: (!this._isComplete || !this.currentArmatureData) ? false : ls.eval_e(event.armatureName) == this.currentArmatureData.name };
        };
        AIDragonBones.prototype.compareDragonBonesTimeScale = function (event) {
            return { instances: [this], status: this._isComplete && ls.compare(this.armature.animation.timeScale, event.operationType, event.timeScale) };
        };
        AIDragonBones.prototype.dragonBonesIsPlaying = function (event) {
            return { instances: [this], status: this._isComplete && this.isRealPlaying && this.armature.animation.isPlaying && !this.armature.animation.isCompleted };
        };
        AIDragonBones.prototype.dragonBonesIsPlayComplete = function (event) {
            return { instances: [this], status: this._isComplete && this.armature.animation.isCompleted };
        };
        AIDragonBones.prototype.onPlayStart = function (event) {
            return { instances: [this], status: true };
        };
        AIDragonBones.prototype.onLoopComplete = function (event) {
            return { instances: [this], status: true };
        };
        AIDragonBones.prototype.onAllLoopComplete = function (event) {
            return { instances: [this], status: true };
        };
        Object.defineProperty(AIDragonBones.prototype, "currentAnimationName", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.name;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "animationDuration", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.duration;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "animationFrameCount", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.frameCount;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "animationPlayTimes", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.playTimes;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "animationPosition", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.position;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "animationFadeInTime", {
            get: function () {
                if (this._isComplete)
                    return this.currentAnimationData.fadeInTime;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "currentArmatureName", {
            get: function () {
                if (this._isComplete)
                    return this.currentArmatureData.name;
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "armatureframeRate", {
            get: function () {
                if (this._isComplete)
                    return this.currentArmatureData.frameRate;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "currentFrame", {
            get: function () {
                if (this._isComplete && this.armature.animation.lastAnimationState)
                    return Math.round(this.armature.animation.lastAnimationState.currentTime * this.armature.armatureData.frameRate);
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "totalFrame", {
            get: function () {
                if (this._isComplete && this.armature.animation.lastAnimationState)
                    return Math.round(this.armature.animation.lastAnimationState.totalTime * this.armature.armatureData.frameRate);
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIDragonBones.prototype, "currentPlayedTimes", {
            get: function () {
                if (this._isComplete)
                    return this.curPlayedTimes;
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        AIDragonBones.prototype.saveToJSON = function () {
            var o = _super.prototype.saveToJSON.call(this);
            o["url"] = this["url"];
            o["textureConfigUrl"] = this["textureConfigUrl"];
            o["skeletonUrl"] = this["skeletonUrl"];
            o["isPlayDefault"] = this["isPlayDefault"];
            o["isPlayDefault"] = this["isPlayDefault"];
            o["playTimes"] = this["playTimes"];
            o["animationName"] = this["animationName"];
            o["armatureName"] = this["armatureName"];
            return o;
        };
        AIDragonBones.prototype.loadFromJSON = function (o) {
            if (o) {
                _super.prototype.loadFromJSON.call(this, o);
                this["url"] = o["url"];
                this["textureConfigUrl"] = o["textureConfigUrl"];
                this["skeletonUrl"] = o["skeletonUrl"];
                this["isPlayDefault"] = o["isPlayDefault"];
                this["isPlayDefault"] = o["isPlayDefault"];
                this["playTimes"] = o["playTimes"];
                this["animationName"] = o["animationName"];
                this["armatureName"] = o["armatureName"];
            }
        };
        AIDragonBones.prototype.clone = function () {
            var cl = _super.prototype.clone.call(this);
            cl["url"] = this["url"];
            cl["textureConfigUrl"] = this["textureConfigUrl"];
            cl["skeletonUrl"] = this["skeletonUrl"];
            cl["isPlayDefault"] = this["isPlayDefault"];
            cl["playTimes"] = this["playTimes"];
            cl["animationName"] = this["animationName"];
            cl["armatureName"] = this["armatureName"];
            return cl;
        };
        return AIDragonBones;
    }(ls.AISprite));
    ls.AIDragonBones = AIDragonBones;
    __reflect(AIDragonBones.prototype, "ls.AIDragonBones");
    var CompareSkeletonActionEvent = (function (_super) {
        __extends(CompareSkeletonActionEvent, _super);
        function CompareSkeletonActionEvent() {
            return _super.apply(this, arguments) || this;
        }
        return CompareSkeletonActionEvent;
    }(ls.BaseEvent));
    ls.CompareSkeletonActionEvent = CompareSkeletonActionEvent;
    __reflect(CompareSkeletonActionEvent.prototype, "ls.CompareSkeletonActionEvent");
    var CompareDragonBonesTimeScaleEvent = (function (_super) {
        __extends(CompareDragonBonesTimeScaleEvent, _super);
        function CompareDragonBonesTimeScaleEvent() {
            return _super.apply(this, arguments) || this;
        }
        return CompareDragonBonesTimeScaleEvent;
    }(ls.BaseEvent));
    ls.CompareDragonBonesTimeScaleEvent = CompareDragonBonesTimeScaleEvent;
    __reflect(CompareDragonBonesTimeScaleEvent.prototype, "ls.CompareDragonBonesTimeScaleEvent");
    var DragonBonesHasAnimationEvent = (function (_super) {
        __extends(DragonBonesHasAnimationEvent, _super);
        function DragonBonesHasAnimationEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesHasAnimationEvent;
    }(ls.BaseEvent));
    ls.DragonBonesHasAnimationEvent = DragonBonesHasAnimationEvent;
    __reflect(DragonBonesHasAnimationEvent.prototype, "ls.DragonBonesHasAnimationEvent");
    var DragonBonesIsPlayingEvent = (function (_super) {
        __extends(DragonBonesIsPlayingEvent, _super);
        function DragonBonesIsPlayingEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesIsPlayingEvent;
    }(ls.BaseEvent));
    ls.DragonBonesIsPlayingEvent = DragonBonesIsPlayingEvent;
    __reflect(DragonBonesIsPlayingEvent.prototype, "ls.DragonBonesIsPlayingEvent");
    var DragonBonesIsPlayCompleteEvent = (function (_super) {
        __extends(DragonBonesIsPlayCompleteEvent, _super);
        function DragonBonesIsPlayCompleteEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesIsPlayCompleteEvent;
    }(ls.BaseEvent));
    ls.DragonBonesIsPlayCompleteEvent = DragonBonesIsPlayCompleteEvent;
    __reflect(DragonBonesIsPlayCompleteEvent.prototype, "ls.DragonBonesIsPlayCompleteEvent");
    var DragonBonesOnPlayStartEvent = (function (_super) {
        __extends(DragonBonesOnPlayStartEvent, _super);
        function DragonBonesOnPlayStartEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesOnPlayStartEvent;
    }(ls.BaseEvent));
    ls.DragonBonesOnPlayStartEvent = DragonBonesOnPlayStartEvent;
    __reflect(DragonBonesOnPlayStartEvent.prototype, "ls.DragonBonesOnPlayStartEvent");
    var DragonBonesOnLoopCompleteEvent = (function (_super) {
        __extends(DragonBonesOnLoopCompleteEvent, _super);
        function DragonBonesOnLoopCompleteEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesOnLoopCompleteEvent;
    }(ls.BaseEvent));
    ls.DragonBonesOnLoopCompleteEvent = DragonBonesOnLoopCompleteEvent;
    __reflect(DragonBonesOnLoopCompleteEvent.prototype, "ls.DragonBonesOnLoopCompleteEvent");
    var DragonBonesOnAllLoopCompleteEvent = (function (_super) {
        __extends(DragonBonesOnAllLoopCompleteEvent, _super);
        function DragonBonesOnAllLoopCompleteEvent() {
            return _super.apply(this, arguments) || this;
        }
        return DragonBonesOnAllLoopCompleteEvent;
    }(ls.BaseEvent));
    ls.DragonBonesOnAllLoopCompleteEvent = DragonBonesOnAllLoopCompleteEvent;
    __reflect(DragonBonesOnAllLoopCompleteEvent.prototype, "ls.DragonBonesOnAllLoopCompleteEvent");
})(ls || (ls = {}));
