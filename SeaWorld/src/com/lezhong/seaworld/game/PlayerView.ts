/**
 *
 * @author 
 *
 */
class PlayerView extends Component {
    private gameObject: GameObject;
    private view:egret.Sprite;
    private label:egret.TextField;
	public constructor(gameObject:GameObject) {
    	  super();
    	  this.gameObject = gameObject;
    	  
    	  this.view = new egret.Sprite();
    	  this.gameObject.addChild(this.view);
    	  
    	  this.label = new egret.TextField();
    	  this.label.textColor = 0x00ff00;
    	  this.label.text = this.gameObject.data["name"];
		  this.label.x = -this.label.width / 2;
		  this.label.y = -this.label.height / 2;
    	  this.view.addChild(this.label);
	}
	
	public onEnter():void {
		this.updateView();
	}

	public updateView():void
	{
		var radius:number = this.gameObject.data["radius"];
		this.view.graphics.clear();
	    this.view.graphics.beginFill(0xff0000);
	    this.view.graphics.drawCircle(0, 0, radius);
	    this.view.graphics.endFill();
	}
	
	public onExit():void {
	    this.view.graphics.clear();
	    if (this.view.parent != null) {
	        this.view.parent.removeChild(this.view);
	    }
	}
}
