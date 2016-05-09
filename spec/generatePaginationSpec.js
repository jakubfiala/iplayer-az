describe('generatePagination', function() {
	var generatePagination = require('../lib/generatePagination.js');
	var numbers = [1, 2, 3, 4, 5];

	it('should generate an Array', function() {
		expect(generatePagination(20)).toEqual(jasmine.any(Array));
	});

	it('should return an Array of Numbers', function() {
		expect(generatePagination(5)[0]).toEqual(jasmine.any(Number));
	});

	it('should return the correct number of Numbers', function() {
		expect(generatePagination(10).length).toBe(10);
		expect(generatePagination(15).length).toBe(15);
	});

	it('should return the correct numbers', function() {
		expect(generatePagination(5)).toEqual(numbers);
	});
});
