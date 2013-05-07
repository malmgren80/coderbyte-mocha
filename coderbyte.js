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