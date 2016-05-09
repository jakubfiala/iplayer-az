var request = require('request');
const baseURI = 'https://ibl.api.bbci.co.uk';

module.exports = function loadData(letter, page, imgSize, callback) {
	request.get(baseURI + '/ibl/v1/atoz/' + letter.toLowerCase() + '/programmes?page=' + page.toString(), function(err, res, body) {
		if (!err && res.statusCode == 200) {
			var programmes = JSON.parse(body).atoz_programmes;
			var programmeList = programmes.elements.map(function(prog) {
				var processed = prog;
				processed.images.standard = processed.images.standard.replace('{recipe}', imgSize);
				return processed;
			});
			var numPages = Math.ceil(programmes.count/programmes.per_page);
			callback(programmeList, numPages);
		}
		else {
			callback(err);
		}

	});
}
