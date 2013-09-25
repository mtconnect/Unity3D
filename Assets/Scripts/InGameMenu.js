var menuIn : boolean = false;
var menuOut : boolean = false;
var menuInPos : Transform;
var menuOutPos : Transform;
var duration : float = 1;
var t : float = 0;
var gameTime : float;
var dmg : boolean;
var okuma : boolean;
var fanuc : boolean;
var mazak : boolean;



function Update(){
	if(menuIn == true){
		gameTime += Time.deltaTime;
		t += Time.deltaTime;
		transform.position = Vector3.Lerp(menuOutPos.position, menuInPos.position, t/duration);
		if(t >= duration){
   			t = 0;
    		gameTime = 0;
    		menuIn = false;
    	}
    }
    if(menuOut == true){
		gameTime += Time.deltaTime;
		t += Time.deltaTime;
		transform.position = Vector3.Lerp(menuInPos.position, menuOutPos.position, t/duration);
		if(t >= duration){
   			t = 0;
    		gameTime = 0;
    		menuOut = false;
    	}
    }
}
