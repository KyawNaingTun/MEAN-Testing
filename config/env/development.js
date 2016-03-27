module.exports = {
	// Development configuration options
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '623827577770586',
		clientSecret: '3e862f25d70dd620c187db4770ef7ec0',
		callbackURL: 'http://localhost:9000/oauth/facebook/callback'
	}
};