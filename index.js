var express = require('express');
var server = require('./src/server/server.js');

var app = express();

// check if we're in test mode
var __test = global.jasmine;

if (!__test) console.log('Defining routes...');

app.get('/', server.root);
app.get('/:letter', server.letter);
app.get('/:letter/:page', server.letter_page);

app.use(function(req, res) {
	res.status(404).send('404: Page not found.');
});

var session = app.listen(3000, function() {
	if (!__test) console.log('Server initialized.');
});

exports.close = function() {
	session.close();
}
