function initial(current, water) {
	var rows = water; // 20; //document.getElementById('glass').value;
	var heightNum = 200/rows;
	//console.log(rows);
	//alert("hello?");

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
}