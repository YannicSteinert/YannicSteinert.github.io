var befehle;
befehle = JSON.parse(befehlsliste_json);

function fillSidePanel()
{
	// Schaltflächen Generieren
	var txt = "";
	var kathegorie = "";
	for(let i = 0; i < befehle.length; i++)
	{
		if(kathegorie == "" || kathegorie != befehle[i].Kathegorie)
		{
			kathegorie = befehle[i].Kathegorie;
			txt += '<p id="lst_kath_title">'+kathegorie+"</p>";
		}
		txt += '<a href="#" id="bflst_' + i + '">' + befehle[i].Anzeigename + '</a>';
	}
	document.getElementById('scrollmenu').innerHTML = txt;
	// Eventlistener Hinzufügen
	for(let i = 0; i < befehle.length; i++)
	{
		document.getElementById("bflst_"+i).addEventListener("click", function(){eventlistner_updatetext(i);}, false);
	}
	
}

function eventlistner_updatetext(a) {
	// TITEL
	document.getElementById('befehl_header').innerHTML = befehle[a].Anzeigename;
	// TEXTE
	document.getElementById('befehl_text_1').innerHTML = befehle[a].Text1;
	document.getElementById('befehl_text_2').innerHTML = befehle[a].Text2;
	document.getElementById('befehl_text_3').innerHTML = befehle[a].Text3;
	// BILDER
	document.getElementById("befehl_bild1").style.height = '100px';
	document.getElementById("befehl_bild2").style.height = '100px';
	if(befehle[a].Bild1 == "")	// No Pic 1
	{
		document.getElementById("befehl_bild1").style.height = '0px';
	}
	else
		document.getElementById("befehl_bild1").src = "https://raw.githubusercontent.com/YannicSteinert/YannicSteinert.github.io/main/images/befehle/"+befehle[a].Bild1;
	if(befehle[a].Bild2 == "")	// No Pic 2
	{
		document.getElementById("befehl_bild2").style.height = '0px';
	}
	else
		document.getElementById("befehl_bild2").src = "https://raw.githubusercontent.com/YannicSteinert/YannicSteinert.github.io/main/images/befehle/"+befehle[a].Bild2;
	
}

fillSidePanel();