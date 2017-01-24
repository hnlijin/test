/**
 *
 * @author 
 *
 */
class MapBackground extends egret.Sprite
{
	public constructor() {
    	  super();
    	  this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStge, this);
	}
	
    public onAddToStge(evt:egret.Event):void
    {
        this.stage.addEventListener(egret.Event.RESIZE,this.onStageResize,this);
        this.onResize();
    }
	
    public onStageResize(evt:egret.Sprite):void
	{
	    this.onResize();
	}
	
	public onResize():void
	{
        this.graphics.clear();
        this.graphics.beginFill(0x00FF00);
        this.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
        this.graphics.endFill();
	}
}
