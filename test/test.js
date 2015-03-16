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
  describe('.clean', function () {
    var a = [1,2,3,2];
    it('returns a an array where all elements equal to function argument are removed', function(){
      assert.deepEqual(a.clean(2), [1,3]);
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
  describe('.unique', function () {
    var a = [1,2,3,2];
    it('returns an array where all duplicates are removed', function(){
      assert.deepEqual(a.unique(), [1,2,3]);
    });
  });
  describe('.concatUnique', function () {
    var a = [1,2,3,2];
    var b = [2,3,4,5];
    it('returns a concatenated array after removing already present elements', function(){
      assert.deepEqual(a.concatUnique(b), [1,2,3,2,4,5]);
    });
  });
  describe('.orderIndices', function () {
    var a = [1,2,5,3,4];
    it('returns array of indices in increasing order', function(){
      assert.deepEqual(a.orderIndices(), [0,1,3,4,2]);
    });
    it('accepts a custom comparator function', function(){
      assert.deepEqual(a.orderIndices(function(a, b){
        return a > b ? -1 : a < b ? 1 : 0;
      }), [2,4,3,1,0]);
    });
  });
});
