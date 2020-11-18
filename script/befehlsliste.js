/*
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
*/

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://raw.githubusercontent.com/YannicSteinert/YannicSteinert.github.io/main/Data/BefehlsListe.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Befehl");
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}