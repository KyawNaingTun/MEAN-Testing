module.exports = {
	// Development configuration options
	db: 'mongodb://kknts:kknts@2016@ds025429.mlab.com:25429/heroku_hnshm0z9',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '623827577770586',
		clientSecret: '3e862f25d70dd620c187db4770ef7ec0',
		callbackURL: 'http://localhost:9000/oauth/facebook/callback'
	}
};