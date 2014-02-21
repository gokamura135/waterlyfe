var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var username = req.query.username;
	var amount = req.query.amount;
	var currTotal = 0;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			currTotal = data["accounts"][i].water;
			break;
		}
	}
	
	data["accounts"][i].water = currTotal + parseInt(amount);
		
	//data["accounts"].push(newFriend);
	console.log(data);

	res.render('add', {
		'username': username
	});
 }