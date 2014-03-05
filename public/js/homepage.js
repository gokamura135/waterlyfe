var count = 0;
var total = 0;

function initial(water) {

	var rows = water; 
	var heightNum = 200/rows;
	
	var root = document.getElementById('glass');
	
	var tab = document.createElement('table');
	tab.className = "waterTable";
	tab.id = "waterTable";
	tab.border = 2;
	tab.style.width = "100%";
	tab.style.height = "100%";
	tab.style.cssFloat = "left";
	var tbo = document.createElement('tbody');
	var row, cell;
	
	for(var i = rows-1; i >= 0; i--) {
		row = document.createElement('tr');
		row.id = "row" + String(i);
		row.style.width = "100%";
		row.style.height = '"' + String(heightNum) + 'px"';
		cell = document.createElement('td');
		//cell.appendChild(document.createTextNode(row.id));
		row.appendChild(cell);
		tbo.appendChild(row);
	}
	
	tab.appendChild(tbo);
	root.appendChild(tab);

	total = water;
}

function initial2(current) {
	
	var row;
	count = current;

	for(var i = 0; i < current; i++) {
		//document.getElementById("row0").innerHTML = i;
		row = document.querySelector("#row" + String(i));
		if(row != null)
			row.style.backgroundColor = "#0000FF";
	}

	document.getElementById("glass_label").innerHTML = 
	"<h4>So far today: <br/>" + String(current) + "/" + String(total) + " oz.</h4>";

	document.getElementById("current").value = count;
	document.getElementById("current1").value = count;
	document.getElementById("current2").value = count;
	document.getElementById("current3").value = count;
}
	
function addWater(current) {
	//count = Integer(current);
	//var username = req.query.username;
	var amount = parseInt(document.getElementById("amount").value);
	//document.getElementById("row0").innerHTML = amount;
	
	var row;
	
	for(var i = count; i < count + amount; i++) {
		//document.getElementById("row0").innerHTML = i;
		row = document.querySelector("#row" + String(i));
		if(row != null)
			row.style.backgroundColor = "#0000FF";
	}
	
	count = count + amount;
	
	var numRows = document.getElementById("waterTable").rows.length;
	
	if(count >= numRows) {
		alert("Daily Water Intake Complete!");
	}
	
	document.getElementById("glass_label").innerHTML = 
	"<h4>So far today: <br/>" + String(count) + "/" + String(numRows) + " oz.</h4>";

	document.getElementById("current").value = count;
	document.getElementById("current1").value = count;
	document.getElementById("current2").value = count;
	document.getElementById("current3").value = count;
}