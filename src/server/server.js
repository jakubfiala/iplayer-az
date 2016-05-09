var loadData = require('../../lib/loadData.js');
var generateLetters = require('../../lib/generateLetters.js');
var generatePagination = require('../../lib/generatePagination.js');


//this can be constant for the purposes of our layout
const imgRes = '406x228';
const alphabetLength = 26;

function renderList(res, data, numPages, currentLetter, currentPage) {
	res.render('index', {
		title: 'iPlayer A to Z',
		letters: generateLetters(26),
		programmes: data,
		pages: generatePagination(numPages),
		currentLetter,
		currentPage
	});
}

module.exports['root'] = function(req, res) {
	loadData('A', 1, imgRes, function(data, numPages) {
		renderList(res, data, numPages, 'A', 1);
	});
}

module.exports['letter'] = function(req, res) {
	loadData(req.params.letter, 1, imgRes, function(data, numPages) {
		renderList(res, data, numPages, req.params.letter, 1);
	});
}

module.exports['letter_page'] = function(req, res, next) {
	loadData(req.params.letter, req.params.page, imgRes, function(data, numPages) {
		renderList(res, data, numPages, req.params.letter, req.params.page);
	});
}

module.exports['p404'] = function(req, res) {
	res.render('404', {
		title: 'iPlayer A to Z - Not Found'
	});
}
