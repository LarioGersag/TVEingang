//Banales Check, zum verhindern dass irgend jemand per Zufall Name ändern kann
//PW in DB abspeichern, evtl. auch durch Zusatzlink änderbar machen?
function check() {
	let check = prompt("Passwort eingeben");
	if (check == "GersaG") {
	setName();
	} else {
	alert("Wrong PW");
	}
}

//Name in DB abspeichern bzw. überschreiben und darstellen
//Neuer State/Name soll auf offenen Seiten gepusht/ohne Reloading ersichtlich werden
function setName() {
	let person = prompt("Namen eingeben");
	
	//Placeholder, so dass #name nicht verschwindet und #willkommen nach oben rutscht
	//Evtl. bessere Lösung?
	if (person == "" || person == " ") {
		person = "&nbsp";
	}
		//Name aus DB ziehen und darstellen
		changeText(person);
}

function changeText(name) {
	document.getElementById("name").innerHTML = name;
}

//ToDo - get Anzahl vorhandener Fotos in der Datei
function getNumberOfPics() {
	return 5;
}

function generatePath() {
	let imgNumber = Math.floor(Math.random() * getNumberOfPics());
	return "url(images/background/gersag" + imgNumber + ".jpg)";
}

function changeBgPic() {
	let body = document.getElementById("body");
	body.style.setProperty("--pic-url", generatePath())
}

function autoChangeBg() {
	setInterval(changeBgPic, 10000);
}

autoChangeBg();