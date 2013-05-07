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
});

