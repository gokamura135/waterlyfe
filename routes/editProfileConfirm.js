var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var username = req.query.username;
	var email = req.query.email;
	var age = req.query.age;
	var goal = req.query.goal;
	var comments = req.query.comments;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			data["accounts"][i].email = email;
			data["accounts"][i].age = age;
			data["accounts"][i].goal = goal;
			data["accounts"][i].comments = comments;
			break;
		}
	}

	console.log(data);

	res.render('editProfileConfirm', {
		'username': username
	});
 }