describe('loadData', function() {
	var loadData = require('../lib/loadData.js');

	var	imgRes = '406x228';

	it('calls a passed-in callback function that is passed an Array', function() {
		var testObj = {
			testFunc: function() {}
		}

		spyOn(testObj, 'testFunc');
		loadData('C', 1, imgRes, testObj.testFunc);

		expect(testObj.testFunc).toHaveBeenCalled();
		expect(testObj.testFunc).toHaveBeenCalledWith(jasmine.any(Array));
	});

	it('returns an Array with at least one element', function(done) {
		loadData('A', 1, imgRes, function(data) {
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	it('replaces {recipe} with an image size string', function(done) {
		loadData('B', 2, imgRes, function(data) {
			var programmesWithRecipeNotReplaced = data.filter(function(prog) {
				return prog.images.standard.indexOf('{recipe}') > -1;
			});
			expect(programmesWithRecipeNotReplaced.length).toBe(0);
			done();
		});
	});

	it('also returns the number of pages for a letter', function(done) {
		loadData('K', 3, imgRes, function(data, numPages) {
			expect(numPages).not.toBeUndefined();
			expect(numPages).toBeGreaterThan(0);
			done();
		});
	});


});
