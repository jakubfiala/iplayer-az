var request = require('request');
var app = require('../index.js');

const baseURI = 'http://localhost:3000';

describe('App', function() {
	afterAll(function() {
		app.close();
	});

	it('Returns a response with status 200 for root path', function(done) {
		request.get(baseURI + '/', function(err, res, body) {
			expect(res.statusCode).toBe(200);
			done();
		});
	});

	it('Returns 404 for a non-existent path', function(done) {
		request.get(baseURI + '/asfkjl/asdfkjb/kjndj', function(err, res, body) {
			expect(res.statusCode).toBe(404);
			done();
		});
	});
});
