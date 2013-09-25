var mat1 : Material;
var mat2 : Material;
var triggerMenuObj : GameObject;
private var triggerMenuScript : TriggerMenu;

function Awake(){
	triggerMenuScript = triggerMenuObj.GetComponent(TriggerMenu);
}

function Update(){
	if(triggerMenuScript.menuCount == 1){
		renderer.material = mat1;
	}
	if(triggerMenuScript.menuCount == 2){
		renderer.material = mat2;
	}
}