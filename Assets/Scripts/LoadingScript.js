var nextLevel : int;

function Start(){
	nextLevel = PlayerPrefs.GetInt("NextLevel");
	yield WaitForSeconds(.1);
	Application.LoadLevel(nextLevel);
}
