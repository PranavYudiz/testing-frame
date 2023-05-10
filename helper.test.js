const { expect,assert} = require('chai');
const { capitalizeString } = require('./helper');

describe('Helper Functions', () => {

  describe('capitalizeString', () => {
    it('should capitalize the first letter of a string', (done) => {
      const input = 'hello';
      const expectedOutput = 'Hello';

      const result = capitalizeString(input);

      expect(result).to.equal(expectedOutput);
      done()
    });

    it('should handle an empty string', (done) => {
      const input = '';
      const expectedOutput = '123';

      const result = capitalizeString(input);

      expect(result).to.equal(expectedOutput);
      done()
    });

    it('should handle a string with only one character', (done) => {
      const input = 'a';
      const expectedOutput = 'A';

      const result = capitalizeString(input);

      expect(result).to.equal(expectedOutput);
      done()
    });
  });

  describe('print abcd',()=>{
    it('should print abcd', (done) => {
      const input = 'abcd';
      const expectedOutput = 'ABCD';

      const result = input;

      expect(result).to.equal(expectedOutput);
      done()
    });
  })


  describe('check if array is type of array',()=>{
     it('assert expression',()=>{
       assert('Aman Thakur' !== 'aman thakur', 'Aman Thakur is not aman thakur');
   });
  
   // check for array assertions
   it (`isArray assertions`, function(){
       assert(Array.isArray([]), 'empty arrays are arrays');
   });


   it(`isOk assertion`, function(){
       assert.isOk('everything', 'everything is ok');
   });


   it(`equal assertions`, function(){
       assert.equal(16, '16', '== coerces values to strings');
       assert.notEqual(16, 15, '!= coerces values to value');
   });


   it('exists assertions', function(){
       const coding = 'ninja';
       assert.exists(coding, 'coding is neither `null` nor `undefined`');
   });


   it('isTrue assertion', function(){
       const isPalindrome = false;
      //  assert.isTrue(isPalindrome, 'it is palindrome');
      assert.isOk('everything', 'this will fail');
   });

   it('isNull assertions', function(){
       const val=0;

       assert.isNull(null, 'no error');
       assert.isNaN(NaN, 'no NaN');
       assert.isUndefined(val, 'is undefined');
       assert.equal(val,0,'yes zero')
       assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
      assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
      assert.typeOf('tea', 'string', 'we have a string');
   });
  })


});