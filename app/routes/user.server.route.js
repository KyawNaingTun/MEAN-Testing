var users = require('../../app/controllers/user.server.controller'),
	passport = require('passport');

module.exports = function(app){
	app.get('/users', users.list);
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local',{
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));
		
	app.get('/signout', users.signout);

	// oauth
	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}));

	app.get('/oauth/facebook/callback', passport.authenticate('facebook',{
		failureRedirect: '/signin',
		successRedirect: '/'
	}));
};