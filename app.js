
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var add = require('./routes/add');
var homepage = require('./routes/homepage');
var signup = require('./routes/signup');
var myProfile = require('./routes/myProfile');
var editProfile = require('./routes/editProfile');
var history = require('./routes/history');
var goals = require('./routes/goals');
var editGoals = require('./routes/editGoals');
var calculator = require('./routes/calculator');
var setReminder = require('./routes/setReminder');
var editReminder = require('./routes/editReminder');
var deleteReminder = require('./routes/deleteReminder');

var template = require('./routes/template');

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
//app.get('/add', add.addFriend);
app.get('/homepage', homepage.view);
app.get('/signup', signup.view);
app.get('/myProfile', myProfile.view);
app.get('/editProfile', editProfile.view);
app.get('/history', history.view);
app.get('/goals', goals.view);
app.get('/editGoals', editGoals.view);
app.get('/calculator', calculator.view);
app.get('/setReminder', setReminder.view);
app.get('/editReminder', editReminder.view);
app.get('/deleteReminder', deleteReminder.view);

app.get('/template', template.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
