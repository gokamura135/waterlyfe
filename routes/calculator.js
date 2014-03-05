// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	var username = req.query.username;
	var current = req.query.current;
	
	for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			data["accounts"][i].current = current;
			break;
		}
	}
	
	res.render('calculator', 
	{
		'username': username,
		'current': current
	});
};