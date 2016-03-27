process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen('9000');
console.log("Server is running on port 9000");
module.exports = app;