var LoadXmlDataScript1 : LoadXmlData1;
var LoadXmlDataScript2 : LoadXmlData2;
var LoadXmlDataScript3 : LoadXmlData3;
var LoadXmlDataScript4 : LoadXmlData4;
var powerState : boolean; 
var eStop : boolean; 
var alarm : boolean; 
var block : boolean; 
var controller : boolean; 
var line : boolean; 
var program : boolean; 
var execution : boolean; 
var pathFeed : boolean; 
var pathPos: boolean; 
var spindle : boolean; 
var xPos : boolean; 
var yPos : boolean; 
var zPos : boolean; 
var inGameMenuScript : InGameMenu;

function Start(){
	LoadXmlDataScript1 = GameObject.FindWithTag("Director1").GetComponent(LoadXmlData1);
	LoadXmlDataScript2 = GameObject.FindWithTag("Director2").GetComponent(LoadXmlData2);
	LoadXmlDataScript3 = GameObject.FindWithTag("Director3").GetComponent(LoadXmlData3);
	LoadXmlDataScript4 = GameObject.FindWithTag("Director4").GetComponent(LoadXmlData4);
	inGameMenuScript = GameObject.FindWithTag("Checker").GetComponent(InGameMenu);
}

function Update () {
	if(inGameMenuScript.dmg == true){
		if(powerState == true){
			guiText.text = LoadXmlDataScript1.STR_PowerStatus;
		}
		if(eStop == true){
			guiText.text = LoadXmlDataScript1.STR_EStop;
		}
		if(alarm == true){
			guiText.text = LoadXmlDataScript1.STR_Alarm;
		}
		if(block == true){
			guiText.text = LoadXmlDataScript1.STR_Block;
		}
		if(controller == true){
			guiText.text = LoadXmlDataScript1.STR_Controller;
		}
		if(line == true){
			guiText.text = LoadXmlDataScript1.STR_Line;
		}
		if(program == true){
			guiText.text = LoadXmlDataScript1.STR_Program;
		}
		if(execution == true){
			guiText.text = LoadXmlDataScript1.STR_Execution;
		}
		if(pathFeed == true){
			guiText.text = LoadXmlDataScript1.STR_PathFeedRate;
		}
		if(pathPos == true){
			guiText.text = LoadXmlDataScript1.STR_PathPos;
		}
		if(spindle == true){
			guiText.text = LoadXmlDataScript1.STR_Spindle;
		}
		if(xPos == true){
			guiText.text = LoadXmlDataScript1.STR_XPos;
		}
		if(yPos == true){
			guiText.text = LoadXmlDataScript1.STR_YPos;
		}
		if(zPos == true){
			guiText.text = LoadXmlDataScript1.STR_ZPos;
		}
	}
	if(inGameMenuScript.mazak == true){
		if(powerState == true){
			guiText.text = LoadXmlDataScript2.STR_PowerStatus;
		}
		if(eStop == true){
			guiText.text = LoadXmlDataScript2.STR_EStop;
		}
		if(alarm == true){
			guiText.text = LoadXmlDataScript2.STR_Alarm;
		}
		if(block == true){
			guiText.text = LoadXmlDataScript2.STR_Block;
		}
		if(controller == true){
			guiText.text = LoadXmlDataScript2.STR_Controller;
		}
		if(line == true){
			guiText.text = LoadXmlDataScript2.STR_Line;
		}
		if(program == true){
			guiText.text = LoadXmlDataScript2.STR_Program;
		}
		if(execution == true){
			guiText.text = LoadXmlDataScript2.STR_Execution;
		}
		if(pathFeed == true){
			guiText.text = LoadXmlDataScript2.STR_PathFeedRate;
		}
		if(pathPos == true){
			guiText.text = LoadXmlDataScript2.STR_PathPos;
		}
		if(spindle == true){
			guiText.text = LoadXmlDataScript2.STR_Spindle;
		}
		if(xPos == true){
			guiText.text = LoadXmlDataScript2.STR_XPos;
		}
		if(yPos == true){
			guiText.text = LoadXmlDataScript2.STR_YPos;
		}
		if(zPos == true){
			guiText.text = LoadXmlDataScript2.STR_ZPos;
		}
	}
	if(inGameMenuScript.fanuc == true){
		if(powerState == true){
			guiText.text = LoadXmlDataScript3.STR_PowerStatus;
		}
		if(eStop == true){
			guiText.text = LoadXmlDataScript3.STR_EStop;
		}
		if(alarm == true){
			guiText.text = LoadXmlDataScript3.STR_Alarm;
		}
		if(block == true){
			guiText.text = LoadXmlDataScript3.STR_Block;
		}
		if(controller == true){
			guiText.text = LoadXmlDataScript3.STR_Controller;
		}
		if(line == true){
			guiText.text = LoadXmlDataScript3.STR_Line;
		}
		if(program == true){
			guiText.text = LoadXmlDataScript3.STR_Program;
		}
		if(execution == true){
			guiText.text = LoadXmlDataScript3.STR_Execution;
		}
		if(pathFeed == true){
			guiText.text = LoadXmlDataScript3.STR_PathFeedRate;
		}
		if(pathPos == true){
			guiText.text = LoadXmlDataScript3.STR_PathPos;
		}
		if(spindle == true){
			guiText.text = LoadXmlDataScript3.STR_Spindle;
		}
		if(xPos == true){
			guiText.text = LoadXmlDataScript3.STR_XPos;
		}
		if(yPos == true){
			guiText.text = LoadXmlDataScript3.STR_YPos;
		}
		if(zPos == true){
			guiText.text = LoadXmlDataScript3.STR_ZPos;
		}
	}
	if(inGameMenuScript.okuma == true){
		if(powerState == true){
			guiText.text = LoadXmlDataScript4.STR_PowerStatus;
		}
		if(eStop == true){
			guiText.text = LoadXmlDataScript4.STR_EStop;
		}
		if(alarm == true){
			guiText.text = LoadXmlDataScript4.STR_Alarm;
		}
		if(block == true){
			guiText.text = LoadXmlDataScript4.STR_Block;
		}
		if(controller == true){
			guiText.text = LoadXmlDataScript4.STR_Controller;
		}
		if(line == true){
			guiText.text = LoadXmlDataScript4.STR_Line;
		}
		if(program == true){
			guiText.text = LoadXmlDataScript4.STR_Program;
		}
		if(execution == true){
			guiText.text = LoadXmlDataScript4.STR_Execution;
		}
		if(pathFeed == true){
			guiText.text = LoadXmlDataScript4.STR_PathFeedRate;
		}
		if(pathPos == true){
			guiText.text = LoadXmlDataScript4.STR_PathPos;
		}
		if(spindle == true){
			guiText.text = LoadXmlDataScript4.STR_Spindle;
		}
		if(xPos == true){
			guiText.text = LoadXmlDataScript4.STR_XPos;
		}
		if(yPos == true){
			guiText.text = LoadXmlDataScript4.STR_YPos;
		}
		if(zPos == true){
			guiText.text = LoadXmlDataScript4.STR_ZPos;
		}
	}
}