var count = 0;

function addWater() {
	console.log(count);
	
	var row2 = document.querySelector("#row2");
	var row3 = document.querySelector("#row3");
	var row4 = document.querySelector("#row4");
	var row5 = document.querySelector("#row5");
	
	count++;
	
	switch(count) {
		case 1:
			console.log("hereeee");
			row2.style.backgroundColor = "#0000FF";
			break;
		case 2:
			row3.style.backgroundColor = "#0000FF";
			break;
		case 3:
			row4.style.backgroundColor = "#0000FF";
			break;
		case 4:
			row5.style.backgroundColor = "#0000FF";
			alert("Daily Water Intake Complete!")
			break;
		default:
			break;
	}
}