var menuCount : int = 1;
var change: boolean;
var machineGui1 : GameObject;
var machineGui2 : GameObject;
var machineGui3 : GameObject;
var machineGui4 : GameObject;
var gui1 : GameObject;
var gui2 : GameObject;
var gui3 : GameObject;
var gui4 : GameObject;
var gui5 : GameObject;
var gui6 : GameObject;
var gui7 : GameObject;
var gui8 : GameObject;
var gui9 : GameObject;
var gui10 : GameObject;
var gui11 : GameObject;
var gui12 : GameObject;
var gui13 : GameObject;
var gui14 : GameObject;

var inGameMenuObj : GameObject;
private var inGameMenuScript : InGameMenu;

function Start(){
	inGameMenuScript = inGameMenuObj.GetComponent(InGameMenu);
	DeactivateGUI();
}


function Update(){
	if(menuCount == 3){
		menuCount = 1;
	}
	if(menuCount == 1 && change == true){
		ActivateGUI();
	}
	if(menuCount == 2 && change == true){
		ActivateGUI();
	}
}
		
function OnTriggerEnter (collision:Collider) {
	if(collision.gameObject.tag == "Mazak"){
		menuCount = 1;
		inGameMenuScript.mazak = true;
		inGameMenuScript.menuOut = false;
		inGameMenuScript.menuIn = true;
		Render1();
		ActivateGUI();
	}
	if(collision.gameObject.tag == "DMG"){
		menuCount = 1;
		machineGui2.active = true;
		inGameMenuScript.dmg = true;
		inGameMenuScript.menuOut = false;
		inGameMenuScript.menuIn = true;
		Render2();
		ActivateGUI();
	}
	if(collision.gameObject.tag == "Okuma"){
		menuCount = 1;
		machineGui3.active = true;
		inGameMenuScript.okuma = true;
		inGameMenuScript.menuOut = false;
		inGameMenuScript.menuIn = true;
		Render3();
		ActivateGUI();
	}
	if(collision.gameObject.tag == "Fanuc"){
		menuCount = 1;
		machineGui4.active = true;
		inGameMenuScript.fanuc = true;
		inGameMenuScript.menuOut = false;
		inGameMenuScript.menuIn = true;
		Render4();
		ActivateGUI();
	}
}

function OnTriggerExit (collision:Collider) {
	if(collision.gameObject.tag == "Mazak"){
		machineGui1.active = false;
		inGameMenuScript.mazak = false;
		inGameMenuScript.menuIn = false;
		inGameMenuScript.menuOut = true;
		DeactivateGUI();
	}
	if(collision.gameObject.tag == "DMG"){
		machineGui2.active = false;
		inGameMenuScript.dmg = false;
		inGameMenuScript.menuIn = false;
		inGameMenuScript.menuOut = true;
		DeactivateGUI();
	}
	if(collision.gameObject.tag == "Okuma"){
		machineGui3.active = false;
		inGameMenuScript.okuma = false;
		inGameMenuScript.menuIn = false;
		inGameMenuScript.menuOut = true;
		DeactivateGUI();
	}
	if(collision.gameObject.tag == "Fanuc"){
		machineGui4.active = false;
		inGameMenuScript.fanuc = false;
		inGameMenuScript.menuIn = false;
		inGameMenuScript.menuOut = true;
		DeactivateGUI();
	}
}

function ActivateGUI(){
	if(menuCount == 1){
		change = false;
		yield WaitForSeconds(.5);
		gui1.active = true;
		gui2.active = true;
		gui3.active = true;
		gui4.active = true;
		gui5.active = true;
		gui6.active = true;
		gui7.active = true;
		gui8.active = false;
		gui9.active = false;
		gui10.active = false;
		gui11.active = false;
		gui12.active = false;
		gui13.active = false;
		gui14.active = false;
	}
	if(menuCount == 2){
		change = false;
		yield WaitForSeconds(.5);
		gui1.active = false;
		gui2.active = false;
		gui3.active = false;
		gui4.active = false;
		gui5.active = false;
		gui6.active = false;
		gui7.active = false;
		gui8.active = true;
		gui9.active = true;
		gui10.active = true;
		gui11.active = true;
		gui12.active = true;
		gui13.active = true;
		gui14.active = true;
	}
}
	
function DeactivateGUI(){
	gui1.active = false;
	gui2.active = false;
	gui3.active = false;
	gui4.active = false;
	gui5.active = false;
	gui6.active = false;
	gui7.active = false;
	gui8.active = false;
	gui9.active = false;
	gui10.active = false;
	gui11.active = false;
	gui12.active = false;
	gui13.active = false;
	gui14.active = false;
}
	
	
function Render1(){
	yield WaitForSeconds(.5);
	machineGui1.active = true;
}

function Render2(){
	yield WaitForSeconds(.5);
	machineGui2.active = true;
}

function Render3(){
	yield WaitForSeconds(.5);
	machineGui3.active = true;
}

function Render4(){
	yield WaitForSeconds(.5);
	machineGui4.active = true;
}