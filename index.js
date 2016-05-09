var express = require('express');
var server = require('./src/server/server.js');
var lessMiddleware = require('less-middleware');

var app = express();

// check if we're in test mode
var __test = global.jasmine;

if (!__test) console.log('Setting up server ...');
app.set('port', (process.env.PORT || 5000));
app.set('views', './views');
app.set('view engine', 'pug');

if (!__test) console.log('Compiling Less ...');
app.use(lessMiddleware(__dirname + '/src',{
	dest: __dirname + '/public'
}));

if (!__test) console.log('Exposing public files ...');
app.use(express.static(__dirname + '/public'));

if (!__test) console.log('Defining routes...');
app.get('/', server.root);
app.get('/:letter', server.letter);
app.get('/:letter/:page', server.letter_page);
app.use(server.p404);

var session = app.listen(app.get('port'), function() {
	if (!__test) console.log('Server initialized.');
});
//make a close export function, so that we can close the server after testing
exports.close = function() {
	session.close();
}

exports.port = app.get('port');
