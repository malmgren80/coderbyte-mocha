var should = require('should'),
    stringUtil = require('../lib/stringUtil.js');

describe('stringUtil', function(){
    describe('#returnString(value)', function(){
        it('should return the same string', function(){
            stringUtil.returnString("abc").should.equal('abc');
        });
    });
});