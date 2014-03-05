var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var username = req.query.username;
	var amount = req.query.amount;
	var current = 0;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			current = data["accounts"][i].current;
			break;
		}
	}
	
	data["accounts"][i].water = parseInt(amount);
		
	//data["accounts"].push(newFriend);
	console.log(data);

	res.render('addWater', {
		'username': username,
		'current': current
	});
 }