// terminal 					"terminal_text"
// eingabe 						"terminal_input"
// jetzige aufgabe/kathegorie 	"kat_num"
// Aufgaben titel 				"aufgaben_titel"
// Aufgaben beschreibung 		"aufgaben_text"
// nächste aufgabe 				"btn_next"
// letzte aufgabe 				"btn_last"
// div sideboard 				"sidepanel"


class exercise {
	constructor() {
		this.user = "w00kie";
		this.group = "debian";
		
		this.linestart = this.user + "@" + this.group + ":~$ _";
		this.buffer = [ this.linestart];
	}
	
	update_terminal()
	{
		let txt = "";
		for(let i = 0; i < this.buffer.length; i++)
			txt += this.buffer[i] + "<br>";
		document.getElementById("terminal_text").innerHTML = txt;
	}
	
	addinput(text)
	{
		this.buffer.push(this.linestart+text);
	}
}

var current_exercice = new exercise();



function terminal_confirm()
{
	var eingabe = document.getElementById("terminal_input").value;
	
	current_exercice.addinput(eingabe);
	current_exercice.update_terminal();
}

function change_exercice(a)
{
	alert(a);
}


document.getElementById("btn_next").addEventListener("click", function(){change_exercice(1);});
document.getElementById("btn_last").addEventListener("click", function(){change_exercice(-1);});