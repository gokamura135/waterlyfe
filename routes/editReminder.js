// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	var username = req.query.username;
	
	res.render('editReminder', 
	{
		'username': username
	});
};