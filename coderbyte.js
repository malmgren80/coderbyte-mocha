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
	var nextLetter = function(character) {
		var oldLetters = 'abcdefghijklmnopqrstuvwxyz';
		var newLetters = 'bcdEfghIjklmnOpqrstUvwxyzA';
		
		var index = oldLetters.indexOf(character.toLowerCase());
		return index >= 0 ? newLetters[index] : character;
	}

	var modifiedStr = ''; 

	for (var character in str) {
		modifiedStr += nextLetter(str[character]);
	}	

	return modifiedStr;
};

exports.simpleAdding = function(num) {
	var counter = 1;
	var sum = 0;
	while(counter <= num) {
		sum += counter;
		counter++;
	}
	return sum;
};

exports.letterCapitalize = function(str) {
	var words = str.split(' ');
	var capitalized = [];
	for (var word in words) {
		var newWord = words[word].length > 0 
			? words[word][0].toUpperCase() + words[word].substring(1)	
			: '';

		capitalized.push(newWord);
	}
	return capitalized.join(' ');
};

exports.simpleSymbols = function(str) {
	var cleanedInput = str.replace(/[^a-zA-Z\+]/g, '');
	
	var isValidInput = function(text) {
		var i, 
			isValid = false, 
			lettersRegExp = new RegExp('[a-zA-Z]');

		for ( i = 0 ; i < text.length ; i++) {
			if (!lettersRegExp.test(text[i])) {
				continue;
			}
			if (i === 0 || i === text.length-1 || 
				text[i-1] !== '+' || text[i+1] !== '+') {
				return false;
			}
			isValid = true;
		}
		return isValid;
	}
	return isValidInput(cleanedInput).toString().toLowerCase();
}
				