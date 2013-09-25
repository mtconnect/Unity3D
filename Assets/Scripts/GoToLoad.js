var nextLevel : int;
var loadingLevel : int;

function Activate(){
	PlayerPrefs.SetInt("NextLevel", nextLevel);
	Application.LoadLevel(loadingLevel);
}
