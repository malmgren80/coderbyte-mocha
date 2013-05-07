var should = require('should'),
    coderbyte = require('../coderbyte.js');

describe('coderbyte', function(){
    describe('#firstFactorial(value)', function(){
        it('should return factors multiplied', function(){
            coderbyte.firstFactorial(4).should.equal(24);
        });

        it('should return factors multiplied', function(){
            coderbyte.firstFactorial(8).should.equal(40320);
        });
    });
});