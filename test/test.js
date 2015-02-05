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
  describe('.cumsum', function () {
    var a = [1,2,3];
    it('returns a vector whose elements are cumulative sums of input elements', function(){
      assert.deepEqual(a.cumsum(), [1,3,6]);
    });
  });
  describe('.cumprod', function () {
    var a = [1,2,3,4];
    it('returns a vector whose elements are cumulative product of input elements', function(){
      assert.deepEqual(a.cumprod(), [1,2,6,24]);
    });
  });
  describe('.cummin', function () {
    var a = [1,2,3,2];
    it('returns a vector whose elements are cumulative minima of input elements', function(){
      assert.deepEqual(a.cummin(), [1,1,1,1]);
    });
  });
  describe('.cummax', function () {
    var a = [1,2,3,2];
    it('returns a vector whose elements are cumulative maxima of input elements', function(){
      assert.deepEqual(a.cummax(), [1,2,3,3]);
    });
  });
});
