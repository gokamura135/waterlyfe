// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	var username = req.query.username;
	var current = 0;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			current = data["accounts"][i].current;
			break;
		}
	}
	res.render('editGoals', 
	{
		'username': username,
		'current': current
	});
};

