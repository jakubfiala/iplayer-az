const base = 65;

//in ES6+, this should be done in a generator probably
module.exports = function generateLetters(length) {
	return length <= 26 ? [].concat.apply([], Array(length)).map(function(current, index) {
		return String.fromCharCode(index + base);
	}) : null;
}
