exports.firstFactorial = function(num) {
    var sum = 1;
    var start = num;
    while(start > 1) {
    	sum *= start;
    	start--;
    }

    return sum;
};

exports.letterChanges = function(str) {
	var modifiedStr = '';

	var nextLetter = function(character) {
		var letters = 'abcdefghijklmnopqrstuvwxyz';
		var vowels = 'aeiou';

		var lowerCaseChar = character.toLowerCase();
		var index = letters.indexOf(lowerCaseChar);
		if (index < 0) {
			return character;
		}

		var newChar = letters[lowerCaseChar === 'z' ? 0 : index + 1];

		var vowelIndex = vowels.indexOf(newChar);
		if (vowelIndex >= 0) {
			return vowels[vowelIndex].toUpperCase();
		}

		return newChar;
	} 

	for (var character in str) {
		modifiedStr += nextLetter(str[character]);
	}	

	return modifiedStr;
};