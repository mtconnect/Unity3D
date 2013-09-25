var hit : boolean;
var textBox1 : boolean;
var textBox2 : boolean;
var textBox3 : boolean;
var textBox4 : boolean;
var textBox1Obj : GameObject;
var textBox2Obj : GameObject;
var textBox3Obj : GameObject;
var textBox4Obj : GameObject;
private var textBox1Script : TextBox1;
private var textBox2Script : TextBox2;
private var textBox3Script : TextBox3;
private var textBox4Script : TextBox4;

function Awake(){
	textBox1Script = textBox1Obj.GetComponent(TextBox1);
	textBox2Script = textBox2Obj.GetComponent(TextBox2);
	textBox3Script = textBox3Obj.GetComponent(TextBox3);
	textBox4Script = textBox4Obj.GetComponent(TextBox4);
}

function Update(){
	if(hit){
		hit = false;
		if(textBox1){
			textBox1Script.save = true;
		}
		if(textBox2){
			textBox2Script.save = true;
		}
		if(textBox3){
			textBox3Script.save = true;
		}
		if(textBox4){
			textBox4Script.save = true;
		}
	}
}

function OnMouseDown () {
	if(textBox1){
		textBox1Script.save = true;
	}
	if(textBox2){
		textBox2Script.save = true;
	}
	if(textBox3){
		textBox3Script.save = true;
	}
	if(textBox4){
		textBox4Script.save = true;
	}
}

function Activate(){
	hit = true;
}