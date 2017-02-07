var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var host = RES.getRes("gameconfig_json")["host"];
        var port = RES.getRes("gameconfig_json")["port"];
        this.netSevice = new NetSevice(host, port);
        this.netSevice.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.netSevice.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.netSevice.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.netSevice.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSockeError, this);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.width = stageW / 2;
        textfield.x = stageW / 2 - textfield.width / 2;
        textfield.y = stageH / 2;
        textfield.size = 24;
        textfield.border = true;
        textfield.borderColor = 0xff0000;
        textfield.textColor = 0xffffff;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.type = egret.TextFieldType.INPUT;
        this.textfield = textfield;
        this.desc = new egret.TextField();
        this.desc.text = "输入昵称加入游戏";
        this.desc.size = 18;
        this.desc.x = stageW / 2 - this.desc.width / 2;
        this.desc.y = textfield.y - this.desc.height - 10;
        this.addChild(this.desc);
        var okButton = new MButton(0xff0000, 150, 45, "Join Game", 20);
        this.addChild(okButton);
        okButton.x = stageW / 2 - okButton.width / 2;
        okButton.y = textfield.y + textfield.height + 5;
        okButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
        okButton.touchEnabled = false;
        this.okButton = okButton;
        this.txtMessages = new egret.TextField();
        this.txtMessages.text = "";
        this.txtMessages.size = 16;
        this.txtMessages.textAlign = egret.HorizontalAlign.CENTER;
        this.txtMessages.width = stageW;
        this.txtMessages.height = 50;
        this.txtMessages.y = stageH - this.txtMessages.height;
        this.addChild(this.txtMessages);
        this.joystickCommon = new JoystickCommon();
        this.joystickCommon.x = stageW / 2;
        this.joystickCommon.y = stageH / 2;
        this.joystickCommon.addEventListener(egret.Event.CHANGE, this.onJoystickCommonChange, this);
        this.addChild(this.joystickCommon);
        this.reset();
    };
    p.reset = function () {
        this.joystickCommon.visible = false;
        this.textfield.visible = true;
        this.okButton.visible = true;
        this.desc.visible = true;
    };
    p.onReceiveMessage = function (evt) {
    };
    p.onSocketOpen = function (evt) {
        this.txtMessages.text = "Socket连接成功！";
        this.okButton.touchEnabled = true;
        this.reset();
    };
    p.onSocketClose = function (evt) {
        this.txtMessages.text = "Socket连接断开！";
        this.okButton.touchEnabled = false;
        this.reset();
    };
    p.onSockeError = function (evt) {
        this.txtMessages.text = "Socket连接出错！";
        this.okButton.touchEnabled = false;
        this.reset();
    };
    p.onOkClick = function (evt) {
        if (this.netSevice.connected == false) {
            this.reset();
            this.txtMessages.text = "网络连接断开，请重新刷新页面";
            return;
        }
        if (this.textfield.text.length > 0) {
            this.netSevice.joinGame(this.textfield.text);
            this.joystickCommon.visible = true;
            this.textfield.visible = false;
            this.okButton.visible = false;
            this.desc.visible = false;
        }
        else {
            this.txtMessages.text = "请输入昵称！";
        }
    };
    p.onJoystickCommonChange = function (evt) {
        var p = evt.data;
        var x = p["x"];
        var y = p["y"];
        this.netSevice.gameControl(x, y);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map