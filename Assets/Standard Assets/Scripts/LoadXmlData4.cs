using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using System.Linq;
using System.IO;
using System.Threading;


public class LoadXmlData4 : MonoBehaviour // the Class
{
	static int actualLevel = 1;
	static int LevelMaxNumber;
	static int WaipointCounter = 0;
	
	public string STR_PowerStatus = "";
	public string STR_EStop = "";
	public string STR_Alarm = "";
	public string STR_Block = "";
	public string STR_Controller = "";
	public string STR_Line = "";
	public string STR_Program = "";
	public string STR_Execution = "";
	public string STR_PathFeedRate = "";
	public string STR_PathPos = "";
	public string STR_Spindle = "";
	public string STR_XPos = "";
	public string STR_YPos = "";
	public string STR_ZPos = "";

	
	private string finaltext = "";
	
	//public GameObject LevelName;
	//public GameObject Tutorial;
	//public GameObject FinalText;
	public String connection;
	
	public TextAsset GameAsset;
	
	List<Dictionary<string,string>> levels = new List<Dictionary<string,string>>();
	Dictionary<string,string> obj;
	

	void Start()
	{	//Timeline of the Level creator
		GetLevel();
		StartCoroutine(LevelStartInfo(1.0F));
		LevelMaxNumber = levels.Count;
	}
	
	public void GetLevel()
	{
		//Load XML data from a URL
        //string url = "http://www.itamco.com/gamexmldata.xml";
		connection = "http://" + PlayerPrefs.GetString("OkumaConnection");
        string url = connection; //mtconnect nodes.
        WWW www = new WWW(url);
		//Load the data and yield (wait) till it's ready before we continue executing the rest of this method.
		Thread.Sleep(10000);
        
        if (www.error == null)
        {
            //Sucessfully loaded the XML
            Debug.Log("Loaded following XML " + www.text);

        
        XmlDocument xmlDoc = new XmlDocument(); // xmlDoc is the new xml document. for gamedata
		xmlDoc.LoadXml(www.text); // load the file. for gamedata
		
		//System.IO.StringReader stringReader = new System.IO.StringReader(www.text); // for mtconnect
		//stringReader.Read(); // skip BOM for mtconnect
		//XmlDocument xmlDoc = new XmlDocument(); // xmlDoc is the new xml document. for mtconnect
		//xmlDoc.LoadXml(stringReader.ReadToEnd()); // for mtconnect
		//XmlNodeList levelsList = xmlDoc.GetElementsByTagName("level"); // array of the level nodes.
		
		XmlNodeList DeviceStreamList = xmlDoc.GetElementsByTagName("DeviceStream"); // array of the mtconnect nodes.
		//XmlNodeList levelsList = xmlDoc.SelectNodes("//ComponentStream/Events"); //array of the mtconnect nodes.
		
	
        	
		foreach (XmlNode StartList in DeviceStreamList) 
		{
			
			//XmlNodeList EventsList = ComponentStreamList.ChildNodes;
			obj = new Dictionary<string,string>(); // Create a object(Dictionary) to colect the both nodes inside the level node and then put into levels[] array.
			
				
			//foreach (XmlNode levelsItens in levelcontent) // levels itens nodes.
			foreach (XmlNode ComponentStreamList in StartList) //mtconnect itens nodes.
			{
					foreach (XmlNode EventsList in ComponentStreamList)
					{
						foreach (XmlNode NodeSub in EventsList)
						{
				//if(levelsItens.Name == "name")
				if(NodeSub.Name == "EmergencyStop") //mtconnect nodes.
				{
					//obj.Add("name",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("EmergencyStop",NodeSub.InnerText); //mtconnect nodes.
				}
				
				//if(levelsItens.Name == "tutorial")
				if(NodeSub.Name == "Message") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("Message",NodeSub.InnerText); //mtconnect nodes.
				}
				
				if(NodeSub.Name == "PowerState") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("PowerState",NodeSub.InnerText); //mtconnect nodes.
				}			
				
				if(NodeSub.Name == "Block") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("Block",NodeSub.InnerText); //mtconnect nodes.
				}
							
				if(NodeSub.Name == "ControllerMode") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("ControllerMode",NodeSub.InnerText); //mtconnect nodes.
				}
							
				if(NodeSub.Name == "Line") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("Line",NodeSub.InnerText); //mtconnect nodes.
				}			
				
				if(NodeSub.Name == "Program") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("Program",NodeSub.InnerText); //mtconnect nodes.
				}			
							
				if(NodeSub.Name == "Execution") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("Execution",NodeSub.InnerText); //mtconnect nodes.
				}
							
				if(NodeSub.Name == "PathPosition") //mtconnect nodes.				
				{
					//obj.Add("tutorial",levelsItens.InnerText); // put this in the dictionary.
					obj.Add("PathPosition",NodeSub.InnerText); //mtconnect nodes.
				}
				
				if(NodeSub.Name == "PathFeedrate")
				
				{
					//switch(levelsItens.Attributes["name"].Value)					
					switch(NodeSub.Attributes["dataItemId"].Value) // mtconnect
					{
						//case "Cube": obj.Add("Cube",levelsItens.InnerText);break; // put this in the dictionary.
						case "Fovr": obj.Add("Fovr",NodeSub.InnerText);break; // mtconnect						
						case "Frt":obj.Add("Frt",NodeSub.InnerText); break; // put this in the dictionary.

					}
				}
							
				if(NodeSub.Name == "SpindleSpeed")
				
				{
					//switch(levelsItens.Attributes["name"].Value)					
					switch(NodeSub.Attributes["name"].Value) // mtconnect
					{
						//case "Cube": obj.Add("Cube",levelsItens.InnerText);break; // put this in the dictionary.
						case "Sspeed": obj.Add("Sspeed",NodeSub.InnerText);break; // mtconnect						
						
					}
				}
							
							
							
							
				//if(levelsItens.Name == "object")
				if(NodeSub.Name == "Position")
				
				{
					//switch(levelsItens.Attributes["name"].Value)					
					switch(NodeSub.Attributes["name"].Value) // mtconnect
					{
						//case "Cube": obj.Add("Cube",levelsItens.InnerText);break; // put this in the dictionary.
						case "Xact": obj.Add("Xact",NodeSub.InnerText);break; // mtconnect						
						case "Yact":obj.Add("Yact",NodeSub.InnerText); break; // put this in the dictionary.
						case "Zact":obj.Add("Zact",NodeSub.InnerText); break; // put this in the dictionary.
						case "Sphere": obj.Add("Sphere",NodeSub.InnerText);break; // put this in the dictionary.
					}
				}
				
				if(NodeSub.Name == "finaltext")
				{
					obj.Add("finaltext",NodeSub.InnerText); // put this in the dictionary.
				}
				
				
				
					}
				}	
			}
			levels.Add(obj); // add whole obj dictionary in the levels[].
		}
		
	
		}
        else
        {
            Debug.Log("ERROR: " + www.error);
        }
        
  	}
	
	IEnumerator LevelStartInfo(float Wait)
	{
		string lvlName = "";
		/*//levels[actualLevel-1].TryGetValue("name",out lvlName);
		levels[actualLevel-1].TryGetValue("EmergencyStop",out lvlName); //mtconnect		
		
		string tutorial = "";
		//levels[actualLevel-1].TryGetValue("tutorial",out tutorial);		
		levels[actualLevel-1].TryGetValue("Block",out tutorial); //mtconnect
		*/
		//levels[actualLevel-1].TryGetValue("Cube",out Cube_Character);
		levels[actualLevel-1].TryGetValue("PowerState",out STR_PowerStatus); //mtconnect	
		levels[actualLevel-1].TryGetValue("EmergencyStop",out STR_EStop);
		levels[actualLevel-1].TryGetValue("Message",out STR_Alarm);
		levels[actualLevel-1].TryGetValue("Block",out STR_Block);
		levels[actualLevel-1].TryGetValue("ControllerMode",out STR_Controller);
		levels[actualLevel-1].TryGetValue("Line",out STR_Line);
		levels[actualLevel-1].TryGetValue("Program",out STR_Program);
		levels[actualLevel-1].TryGetValue("Execution",out STR_Execution);
		levels[actualLevel-1].TryGetValue("PathFeedrate",out STR_PathFeedRate);
		levels[actualLevel-1].TryGetValue("PathPosition",out STR_PathPos);
		levels[actualLevel-1].TryGetValue("Sspeed",out STR_Spindle);
		levels[actualLevel-1].TryGetValue("Xact",out STR_XPos);
		levels[actualLevel-1].TryGetValue("Yact",out STR_YPos);
		levels[actualLevel-1].TryGetValue("Zact",out STR_ZPos);

		
		levels[actualLevel-1].TryGetValue("Fovr",out finaltext);
		yield return new WaitForSeconds(Wait);
		
		//GameObject LevelName_GUI = Instantiate(LevelName) as GameObject;
		//LevelName_GUI.guiText.text = lvlName;
		
		yield return new WaitForSeconds(1.0f);
		
		//GameObject Tutorial_GUI = Instantiate(Tutorial) as GameObject;
		//Tutorial_GUI.guiText.text = tutorial;
		
		//yield return new WaitForSeconds(3.0f);
		//DestroyObject(LevelName_GUI);
		
		//yield return new WaitForSeconds(4.0f);
		//DestroyObject(Tutorial_GUI);
	
	}
	
	void Update()
	{
		//connection = (PlayerPrefs.GetString("connection"));
		if(WaipointCounter == 4)
		{
			if(actualLevel<LevelMaxNumber)
			{
				actualLevel+=1;
				WaipointCounter = 0;
				StartCoroutine(FinishLevel(1.0F));
			}
			else
			{
				actualLevel=1;
				WaipointCounter = 0;
				StartCoroutine(FinishLevel(1.0F));
			}
		}
	
	}
	
	IEnumerator FinishLevel(float Wait)
	{
	
		yield return new WaitForSeconds(Wait);
		//GameObject FinalText_GUI = Instantiate(FinalText) as GameObject;
		//FinalText_GUI.guiText.text = finaltext;
		
		yield return new WaitForSeconds(3.0f);
		Application.LoadLevel(0);
	
	}

}