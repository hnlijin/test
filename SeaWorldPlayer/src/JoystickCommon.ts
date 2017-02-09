/**
 *
 * @author 
 *
 */
class JoystickCommon extends egret.DisplayObjectContainer
{
    private joystickBG: egret.Bitmap = null;
    private joystickDot: egret.Bitmap = null;
    private radius:number = 100;
    private offsetX:number = 0;
    private offsetY:number = 0;
    
	public constructor()
	{
        super();
        
    	  this.touchEnabled = true;
    	  
        this.joystickBG = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes("JoystickBG_png");
        this.joystickBG.texture = texture;
        this.addChild(this.joystickBG);
        
        this.joystickDot = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes("Joystick_png");
        this.joystickDot.texture = texture;
        this.addChild(this.joystickDot);
        
        this.radius = this.joystickBG.width / 2 - this.joystickDot.width / 3;
        this.resetPosition(false);
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	
	private resetPosition(sendEvent:Boolean):void
	{
        this.joystickBG.x = -this.joystickBG.width / 2;
        this.joystickBG.y = -this.joystickBG.height / 2;
        this.joystickDot.x = -this.joystickDot.width / 2;
        this.joystickDot.y = -this.joystickDot.height / 2;
        
        if (sendEvent) {
            this.dispatchEvent(new egret.Event(egret.Event.CHANGE,false,false,{ x: 0,y: 0 }));
        }
	}
	
    private onAddToStage(evt:egret.Event):void
    {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchCancel,this);
    }

    private onTouchBegin(evt:egret.TouchEvent):void
    {
    }
    
    private onTouchMove(evt:egret.TouchEvent):void
    {  
        var p = this.globalToLocal(evt.stageX,evt.stageY);
        var lx = p.x;
        var ly = p.y;
        
        if(Math.abs(lx) > this.radius) {
            if(lx > 0) {
                lx = this.radius;
            } else if (lx < 0) {
                lx = -this.radius;
            }
        }
        
        if(Math.abs(ly) > this.radius) {
            if(ly > 0) {
                ly = this.radius;
            } else if (ly < 0) {
                ly = -this.radius;
            }
        }
        
        this.joystickDot.x = lx - this.joystickDot.width / 2;
        this.joystickDot.y = ly - this.joystickDot.height / 2;
        
        if (this.offsetX != lx || this.offsetY != ly) {
            this.offsetX = Math.ceil(lx / this.radius * 100);
            this.offsetY = Math.ceil(ly / this.radius * 100);
            console.log("pos,", this.offsetX, this.offsetY);
            this.dispatchEvent(new egret.Event(egret.Event.CHANGE, false, false, {x:this.offsetX, y:this.offsetY}));
        }
    }
    
    private onTouchEnd(evt:egret.TouchEvent):void
    {
        this.resetPosition(true);
    }
    
    private onTouchCancel(evt:egret.TouchEvent):void
    {
        this.resetPosition(true);
    }
}
