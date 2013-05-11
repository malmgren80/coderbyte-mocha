var should = require('should'),
    coderbyte = require('../coderbyte.js');

describe('coderbyte', function(){
    describe('firstFactorial', function(){
        it('should return factors of 4 multiplied', function(){
            coderbyte.firstFactorial(4).should.equal(24);
        });

        it('should return factors of 8 multiplied', function(){
            coderbyte.firstFactorial(8).should.equal(40320);
        });
    });

    describe('letterChanges', function(){
	    it('should return next letter', function(){
	        coderbyte.letterChanges('abc').should.equal('bcd');
	    });

	    it('should turn around on z', function(){
	        coderbyte.letterChanges('z').should.equal('A');
	    });

	    it('should uppercase letters that becomes vowels', function(){
	        coderbyte.letterChanges('zdhnt').should.equal('AEIOU');
	    });

	    it('string with non letters, should not modify non letters', function(){
	        coderbyte.letterChanges('hello*3').should.equal('Ifmmp*3');
	    });

	    it('string with non letters, should not modify non letters', function(){
	        coderbyte.letterChanges('fun times!').should.equal('gvO Ujnft!');
	    });
	});

	describe('simpleAdding', function(){
	    it('should add up to num', function(){
	    	coderbyte.simpleAdding(12).should.equal(78);
	    });

	    it('should add up to num', function(){
	    	coderbyte.simpleAdding(140).should.equal(9870);
	    });
	});

	describe('letterCapitalize', function(){
	    it('should capitalize single letter', function(){
	    	coderbyte.letterCapitalize('a').should.equal('A');
	    });

		it('should capitalize single letters', function(){
	    	coderbyte.letterCapitalize('a b').should.equal('A B');
	    });

	    it('should capitalize first letter in each word', function(){
	    	coderbyte.letterCapitalize('chuck norris').should.equal('Chuck Norris');
	    });

	    it('should not capitalize when not letter', function(){
	    	coderbyte.letterCapitalize('!chuck #norris').should.equal('!chuck #norris');
	    });
	});

	describe('simpleSymbols', function(){
	    it('should return false when empty', function(){
	    	coderbyte.simpleSymbols('').should.equal('false');
	    });

	    it('should return false when letter is missing', function(){
	    	coderbyte.simpleSymbols('+=325+=+').should.equal('false');
	    });

		it('input 1', function(){
	    	coderbyte.simpleSymbols('+d+=3=+s+').should.equal('true');
	    });

	    it('input 2', function(){
	    	coderbyte.simpleSymbols('f++d+').should.equal('false');
	    });

	    it('input 3', function(){
	    	coderbyte.simpleSymbols('+d===+a+').should.equal('true');
	    });
	    
	    it('input 4', function(){
	    	coderbyte.simpleSymbols('+a=').should.equal('false');
	    });
	});

	describe('checkNums', function(){
	    it('should return -1 when equal', function(){
	    	coderbyte.checkNums(5, 5).should.equal(-1);
	    });

	    it('should return true when num2 is larger than num1', function(){
	    	coderbyte.checkNums(1, 2).should.equal(true);
	    });

	    it('should return false when num2 is smaller than num1', function(){
	    	coderbyte.checkNums(2, 1).should.equal(false);
	    });
	});


});