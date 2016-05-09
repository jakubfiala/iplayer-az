describe('generateLetters', function() {
	var generateLetters = require('../lib/generateLetters.js');
	var letters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	it('should generate an Array', function() {
		expect(generateLetters(20)).toEqual(jasmine.any(Array));
	});

	it('should return an Array of Strings', function() {
		expect(generateLetters(5)[0]).toEqual(jasmine.any(String));
	});

	it('should return the correct number of letters', function() {
		expect(generateLetters(10).length).toBe(10);
		expect(generateLetters(15).length).toBe(15);
	});

	it('should return the correct letters', function() {
		expect(generateLetters(26)).toEqual(letters);
	});

});
