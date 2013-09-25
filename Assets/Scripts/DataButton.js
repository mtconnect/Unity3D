var hit : boolean = false;
var triggerMenuObj : GameObject;
private var triggerMenuScript : TriggerMenu;

function Awake(){
	triggerMenuScript = triggerMenuObj.GetComponent(TriggerMenu);
}

function OnMouseDown(){
	Debug.Log("clicked");
	triggerMenuScript.menuCount += 1;
	triggerMenuScript.change = true;
}

function Update(){
	if(hit){
		hit = false;
		triggerMenuScript.menuCount += 1;
		triggerMenuScript.change = true;
	}
}

function Activate(){
	hit = true;
}