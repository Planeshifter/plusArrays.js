require("../lib/array.js");
var chai = require("chai");
var assert = chai.assert;

describe('Array.protoype', function () {
  describe('.sum', function () {
    var a = [1,2,3];
    it('sums the elements of the array', function(){
      assert.equal(a.sum(), 6);
    });
  });
});
