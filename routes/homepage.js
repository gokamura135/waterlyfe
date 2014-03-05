// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	
	var username = req.query.username;
	if(username == "") {
		username = "guest"
	}
	
	var water = 1;
	var current = 0;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			water = data["accounts"][i].water;
			current = data["accounts"][i].current;
			break;
		}
	}
	
	//initial(water);
	
	res.render('homepage', 
	{
		'username': username,
		'water': water,
		'current': current
	});
	
};
/*
function add(current) {
	concole.log(current);

	var username = req.query.username;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			data["accounts"][i].current = addWater(current);
			break;
		}
	}
}*/

