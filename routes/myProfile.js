// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	
	var username = req.query.username;
	var current = req.query.current;
	var age = "";
	var goal = "";
	var comments = "";
	var imageURL = "";
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			age = data["accounts"][i].age;
			goal = data["accounts"][i].goal;
			comments = data["accounts"][i].comments;
			imageURL = data["accounts"][i].imageURL;
			data["accounts"][i].current = current;
			break;
		}
	}
	
	console.log("hiiiiiiiiiii: " + String(current));
	
	res.render('myProfile', 
	{
		'username': username,
		'age': age, 
		'goal': goal,
		'comments': comments, 
		'imageURL': imageURL,
		'current': current
	});
};
