var hit : boolean;
var levelNumber : int;

function Update () {
	if(hit == true){
		Application.LoadLevel(levelNumber);
	}
}

function OnMouseDown(){
	Application.LoadLevel(levelNumber);
}

function Activate(){
	hit = true;
}