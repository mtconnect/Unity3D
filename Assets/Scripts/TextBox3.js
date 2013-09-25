var stringToEdit : String = "";
var font : Font;
var save : boolean;
var xPos : float;
var yPos : float;
var length : float;
var height : float;

function OnGUI () {
	GUI.skin.font = font;
    // Make a text field that modifies stringToEdit.
     stringToEdit = GUI.TextField (Rect (xPos, yPos, length, height), stringToEdit, 200);
}

function Start(){
	stringToEdit = PlayerPrefs.GetString("FanucConnection");
}

function Update(){
	if(save == true){
		PlayerPrefs.SetString("FanucConnection",stringToEdit);
		save = false;
	}
}