var datein;
datein = JSON.parse(datein_json);

function fillSidePanel()
{
	// Schaltflächen Generieren
	var txt = "";
	var kathegorie = "";
	for(let i = 0; i < datein.length; i++)
	{
		if(kathegorie == "" || kathegorie != datein[i].Kathegorie)
		{
			kathegorie = datein[i].Kathegorie;
			txt += '<p id="lst_kath_title">'+kathegorie+"</p>";
		}
		txt += '<a href="#" id="bflst_' + i + '">' + datein[i].Anzeigename + '</a>';
	}
	document.getElementById('scrollmenu').innerHTML = txt;
	// Eventlistener Hinzufügen
	for(let i = 0; i < datein.length; i++)
	{
		document.getElementById("bflst_"+i).addEventListener("click", function(){eventlistner_updatetext(i);}, false);
	}
}

function eventlistner_updatetext(a) {
	// TITEL
	document.getElementById('befehl_header').innerHTML = datein[a].Anzeigename;
	// TEXTE
	document.getElementById('befehl_text_1').innerHTML = datein[a].Text1;
	document.getElementById('befehl_text_2').innerHTML = datein[a].Text2;
	document.getElementById('befehl_text_3').innerHTML = datein[a].Text3;
	// BILDER
	document.getElementById("befehl_bild1").style.height = '100px';
	document.getElementById("befehl_bild2").style.height = '100px';
	if(datein[a].Bild1 == "")	// No Pic 1
	{
		document.getElementById("befehl_bild1").style.height = '0px';
	}
	else
		document.getElementById("befehl_bild1").src = "https://raw.githubusercontent.com/YannicSteinert/YannicSteinert.github.io/main/images/datein/"+datein[a].Bild1;
	if(datein[a].Bild2 == "")	// No Pic 2
	{
		document.getElementById("befehl_bild2").style.height = '0px';
	}
	else
		document.getElementById("befehl_bild2").src = "https://raw.githubusercontent.com/YannicSteinert/YannicSteinert.github.io/main/images/datein/"+datein[a].Bild2;
	
}

fillSidePanel();