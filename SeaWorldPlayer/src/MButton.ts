/**
 *
 * @author 
 *
 */
class MButton extends egret.Sprite
{
    private _label:egret.TextField = null;
    private _btnWidth:number = 100;
    private _btnHeight:number = 100;
    
	public constructor(color:number, wid:number, hei:number, title:string, fontSize:number = 20) 
	{
        super();
        this._btnWidth = wid;
        this._btnHeight = hei;
        this.graphics.beginFill(color);
        this.graphics.drawRect(0,0,wid,hei);
        this._label = new egret.TextField();
        this._label.size = fontSize;
        this._label.text = title;
        this.addChild(this._label);
        this.updateLayout();
        
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
	}
	
    public set label(title:string)
	{
        this._label.text = title;
        this.updateLayout();
	}
	
	public get label():string
	{
	    return this._label.text;
	}
	
    private onTouchBegin(evt:egret.TouchEvent):void
    {
        this.alpha = 0.8;
    }
    
    private onTouchEnd(evt:egret.TouchEvent):void
    {
        this.alpha = 1;
    }
    
    private onTouchCancel(evt:egret.TouchEvent):void
    {
        this.alpha = 1;
    }
	
	public updateLayout()
	{
        this._label.x = (this._btnWidth - this._label.width) / 2;
        this._label.y = (this._btnHeight - this._label.height) / 2;
	}
}
