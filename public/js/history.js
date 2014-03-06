/* Chart Code */
var graph;
var xPadding = 30;
var yPadding = 30;
 
var data = { values:[
        { X: "Nov", Y: 12 },
        { X: "Dec", Y: 28 },
        { X: "Jan", Y: 18 },
        { X: "Feb", Y: 34 },
        { X: "Mar", Y: 40 },
]};

function getMaxY() {
    var max = 0;
     
    for(var i = 0; i < data.values.length; i ++) {
        if(data.values[i].Y > max) {
            max = data.values[i].Y;
        }
    }
     
    max += 10 - max % 10;
    return max;
}
 
function getXPixel(val) {
    return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5);
}
 
function getYPixel(val) {
    return graph.height() - (((graph.height() - yPadding) / getMaxY()) * val) - yPadding;
}

$(document).ready(function() {
    graph = $('#graph');
    var c = graph[0].getContext('2d');
	
	c.lineWidth = 2;
	c.strokeStyle = '#333';
	c.font = 'italic 8pt sans-serif';
	c.textAlign = "center";
	
	c.beginPath();
	c.moveTo(xPadding, 0);
	c.lineTo(xPadding, graph.height() - yPadding);
	c.lineTo(graph.width(), graph.height() - yPadding);
	c.stroke();
	
	for(var i = 0; i < data.values.length; i++) {
		c.fillText(data.values[i].X, getXPixel(i), graph.height() - yPadding + 20);
	}
	
	c.textAlign = "right"
	c.textBaseline = "middle";
	 
	for(var i = 0; i < getMaxY(); i += 10) {
		c.fillText(i, xPadding - 10, getYPixel(i));
	}
	
	c.strokeStyle = '#f00';
	c.beginPath();
	c.moveTo(getXPixel(0), getYPixel(data.values[0].Y));
	 
	for(var i = 1; i < data.values.length; i ++) {
		c.lineTo(getXPixel(i), getYPixel(data.values[i].Y));
	}
	c.stroke();
	
	c.fillStyle = '#333';
 
	for(var i = 0; i < data.values.length; i ++) {  
		c.beginPath();
		c.arc(getXPixel(i), getYPixel(data.values[i].Y), 4, 0, Math.PI * 2, true);
		c.fill();
	}
});