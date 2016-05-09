describe('Server', function() {
	var server = require('../src/server/server.js');

	it('should have middleware for root, letter, and letter_page routes', function() {
		expect(server.root).toEqual(jasmine.any(Function));
		expect(server.letter).toEqual(jasmine.any(Function));
		expect(server.letter_page).toEqual(jasmine.any(Function));
	});
});
