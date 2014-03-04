var count = 0;

function addWater(current) {
	console.log(count);
	//count = Integer(current);
	
	var amount = parseInt(document.getElementById("amount").value);
	//document.getElementById("row0").innerHTML = amount;
	
	var row = 0;
	
	for(var i = count; i < count + amount; i++) {
		document.getElementById("row0").innerHTML = i;
		row = document.querySelector("#row" + String(i));
		if(row != null)
			row.style.backgroundColor = "#0000FF";
	}
	
	count = count + amount;
	//current = count;
	
	var numRows = document.getElementById("waterTable").rows.length;
	
	if(count >= numRows) {
		alert("Daily Water Intake Complete!");
	}
	
	document.getElementById("glass_label").innerHTML = String(count) + "/" + String(numRows);
	
	//return current;
	
}

$('#aboutLink').on('click', function() {
  ga('send', 'event', 'about', 'click');
});