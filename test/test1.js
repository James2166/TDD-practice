var expect = require('chai').expect;

// to see console results click "Debug this test" in testing tab

describe('test_suite1', function(){
    before('setup code', function(){
        console.log('Setup Code');
    });

    after('teardown code', function(){
        console.log('Teardown code');
    });

    beforeEach('setup for each test', function(){
        console.log('Setup code for each test');
    });

    afterEach('teardown for each test', function(){
        console.log('Teardown code for each test')
    });

    it('test1', function(){
        console.log('test1')
        expect(true).to.equal(true);
    });

    it('test2', function(){
        console.log('test2')
        expect(true).to.equal(true);
    });

    it('test3', function(){
        console.log('test3')
        expect(true).to.equal(true);
    });
});