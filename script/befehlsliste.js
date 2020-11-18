var Connect = new XMLHttpRequest();
Connect.open("GET", "../Data/BefehlsListe.xml", true);
Connect.setRequestHeader("Content-Type", "text/xml");
Connect.send(null);

var TheDocument = Connect.responseXML;
var Befehle = TheDocument.childNodes[0];

for (var i = 0; i < Befehle.children.length; i++)
{
	var Befehl = Befehle.children[i];
	
	var Beispiel = Befehl.getElementsByTagName("Beispiel");
	var Beschreibung = Befehl.getElementsByTagName("Beschreibung");
	var Kategorie = Befehl.getElementsByTagName("Kategorie");
}
