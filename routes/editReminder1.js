// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	var username = req.query.username;
	var reminder1 = "";
	var reminder2 = "";
	var reminder3 = "";

		for(var i = 0; i < data["accounts"].length; i++) {
		if(data["accounts"][i].username == username) {
			reminder1 = data["accounts"][i].reminder1;
			reminder2 = data["accounts"][i].reminder2;
			reminder3 = data["accounts"][i].reminder3;
			break;
		}
	}
	res.render('editReminder1', 
	{
		'username': username,
		'reminder1': reminder1,
		'reminder2': reminder2,
		'reminder3': reminder3
	});
};