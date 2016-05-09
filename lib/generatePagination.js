module.exports = function generatePagination(numPages) {
	return [].concat.apply([], new Array(numPages)).map(function(c,i) { return i + 1; });
}
