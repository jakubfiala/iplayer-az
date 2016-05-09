var loadData = require('../../lib/loadData.js');

function renderList(res, data, numPages, currentLetter, currentPage) {
	res.send('Hello');
}

//this can be constant for the purposes of our layout
const imgRes = '406x228';

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
