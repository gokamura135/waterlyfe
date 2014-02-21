function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
	if(newValue == 0) {
		document.getElementById("description").innerHTML="Minimal Intensity";
	}
		else if(newValue == 10) {
		document.getElementById("description").innerHTML="Maximum Intensity";
	}
	else {
			document.getElementById("description").innerHTML="";
	}
}

function reset() {
	document.getElementById("weight").value="";
	document.getElementById("minutes").value="";
	document.getElementById("results").innerHTML="?";
}

function calculate() {
	var weight = document.getElementById("weight").value;
	var minutes = document.getElementById("minutes").value;
	var resultsVal = document.getElementById("results").value;
	var intensity = document.getElementById("range").innerHTML;

	var oz;
	oz = weight * (2/3);
	oz = oz + (minutes*.4) + (10*intensity);

	if(document.getElementById("weight").value && document.getElementById("minutes").value) {
		document.getElementById("results").innerHTML = oz;
		document.getElementById("results").value = oz;
	}
	if(document.getElementById("weight").value == "")
		document.getElementById("fill").innerHTML = "   Please input info.";
	else {
		document.getElementById("fill").innerHTML = "";
	}

			 if(document.getElementById("minutes").value == "")
		document.getElementById("fill1").innerHTML = "   Please input info.";
	else {
		document.getElementById("fill1").innerHTML = "";
	}

}

function addTotal() {
	var results = document.getElementById("results").value;
	console.log(results);
	document.getElementById("totalAddition").value = results;
}
	
	