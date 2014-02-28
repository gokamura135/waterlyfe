
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
//var mongoose = require('mongoose');

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var add = require('./routes/add');
var addWater = require('./routes/addWater');
var homepage = require('./routes/homepage');
var signup = require('./routes/signup');
var myProfile = require('./routes/myProfile');
var editProfile = require('./routes/editProfile');
var editProfileConfirm = require('./routes/editProfileConfirm');
var history = require('./routes/history');
var goals = require('./routes/goals');
var editGoals = require('./routes/editGoals');
var calculator = require('./routes/calculator');
var setReminder = require('./routes/setReminder');
var editReminder = require('./routes/editReminder');
var editReminder1 = require('./routes/editReminder1');
var deleteReminder = require('./routes/deleteReminder');

var template = require('./routes/template');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS

//var local_database_name = 'waterlyfe';
//var local_database_uri  = 'mongodb://localhost/' + local_database_name
//var database_uri = process.env.MONGOLAB_URI || local_database_uri
//mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/add', add.addFriend);
app.get('/addWater', addWater.addFriend);
app.get('/homepage', homepage.view);
app.get('/signup', signup.view);
app.get('/myProfile', myProfile.view);
app.get('/editProfile', editProfile.view);
app.get('/editProfileConfirm', editProfileConfirm.addFriend);
app.get('/history', history.view);
app.get('/goals', goals.view);
app.get('/editGoals', editGoals.view);
app.get('/calculator', calculator.view);
app.get('/setReminder', setReminder.view);
app.get('/editReminder', editReminder.view);
app.get('/editReminder1', editReminder1.view);
app.get('/deleteReminder', deleteReminder.view);

app.get('/template', template.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
