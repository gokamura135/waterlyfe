// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	
	data['redesign'] = true;
	
	res.render('index', data);
};

exports.viewalt = function(req, res){
	console.log(data);
	
	data['redesign'] = false;
	
	res.render('index', data);
};