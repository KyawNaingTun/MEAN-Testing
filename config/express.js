var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	flash = require('connect-flash'),
	passport = require('passport');


module.exports = function(){
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(methodOverride());

	//define template engin
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(express.static('./public'));

	require('../app/routes/index.server.route.js')(app);
	require('../app/routes/user.server.route.js')(app);
	
	return app;
};