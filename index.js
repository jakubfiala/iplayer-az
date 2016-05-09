var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.status(200).send('Hello');
});

app.use(function(req, res) {
	res.status(404).send('404: Page not found.');
});

var server = app.listen(3000, function() {
	console.log('Server initialized');
});

exports.close = function() {
	server.close();
}
