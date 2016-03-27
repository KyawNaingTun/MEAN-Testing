var express = require('express');
var app = express();

app.use('/', function(req, res){
	res.send('Hello Express, I am Kyaw Naing Tun.');
});

app.listen('9000');
console.log("Server is running on port 9000");

