exports.render = function(req, res){
	res.render('index', {
		title: 'Hello MEAN',
		userFullName: req.user ? req.user.fullName : ''
	});
};