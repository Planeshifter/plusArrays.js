'use strict';

require( "../lib/array" );
var registerMethod = require( "../lib/registerMethod" );
var chai = require( "chai" );
var assert = chai.assert;

describe('registerMethod()', function tests() {

    it( 'should throw an error if provided an argument which is not an object', function test() {
        var values = [
            '5',
            5,
            true,
            undefined,
            null,
            NaN,
            function(){},
            []
        ];

        for ( var i = 0; i < values.length; i++ ) {
            assert.throw( badValue( values[i] ), TypeError);
        }
        function badValue( value ) {
            return function() {
                registerMethod( value );
            };
        }
    });

    it( 'should only attach if method is not already defined', function test() {

        registerMethod(Array.prototype, "sum", function() {
          var sum = 0;
          for (var i = 0; i < this.length; i++) {
            sum += this[i];
          }
          return sum;
        });
        
    });

});

describe('Array.protoype', function tests() {

    describe('.mean()', function tests() {
        var a = [1,2,3];
        it('calculates the man of the elements of the array', function test() {
            assert.equal(a.mean(), 2);
        });
    });

    describe('.max()', function tests() {
        var a = [1, 2, 3, 4, 5];
        it('extracts the maximum element of the array', function test() {
            assert.equal(a.max(), 5);
        });
    });

    describe('.min()', function tests() {
        var a = [1, 2, 3, 4, 5];
        it('extracts the minimum element of the array', function test() {
            assert.equal(a.min(), 1);
        });
    });

    describe('.compare()', function tests() {

        it('checks whether the supplied arrays are the same', function test() {
            var a = [1,3,2];
            var b = [1,3,2];
            assert( a.compare(b) === true );
        });


        it('returns false when arrays do not have same length', function test() {
            var a = [1,3,2];
            var b = [1,3,2,4];
            assert( a.compare(b) === false );
        });

        it('returns false when arrays differ at some position', function test() {
            var a = [1,3,2];
            var b = [1,1,2];
            assert( a.compare(b) === false );
        });

        it('works for multi-dimensional arrays', function test() {
            var a = [[2, 3], [4, 3]];
            var b = [[2, 3], [4, 3]];
            var c = [[2, 2], [4, 3]];
            assert( a.compare(b) === true );
            assert( a.compare(c) === false );
        });

    });

    describe('.sum()', function tests() {
        var a = [1,2,3];
        it('sums the elements of the array', function test() {
            assert.equal(a.sum(), 6);
        });
    });

    describe('.clean()', function tests() {
        var a = [1,2,3,2];
        it('returns a an array where all elements equal to function argument are removed', function test() {
            assert.deepEqual(a.clean(2), [1,3]);
        });
    });

    describe('.cumsum()', function tests() {
        var a = [1,2,3];
        it('returns a vector whose elements are cumulative sums of input elements', function test() {
            assert.deepEqual(a.cumsum(), [1,3,6]);
        });
    });

    describe('.cumprod()', function tests() {
        var a = [1,2,3,4];
        it('returns a vector whose elements are cumulative product of input elements', function test() {
            assert.deepEqual(a.cumprod(), [1,2,6,24]);
        });
    });

    describe('.cummin()', function tests() {
        var a = [1,2,3,2];
        it('returns a vector whose elements are cumulative minima of input elements', function test() {
            assert.deepEqual(a.cummin(), [1,1,1,1]);
        });
    });

    describe('.cummax()', function tests() {
        var a = [1,2,3,2];
        it('returns a vector whose elements are cumulative maxima of input elements', function test() {
            assert.deepEqual(a.cummax(), [1,2,3,3]);
        });
    });

    describe('.containsAll()', function tests() {
        var a = [1,2,3,2];
        it('checks whether array contains any of the supplied elements', function test() {
            var b = [3, 4];
            var c = [4, 5];
            var d = [1, 2];
            assert( a.containsAll(b) === false );
            assert( a.containsAll(c) === false );
            assert( a.containsAll(d) === true );
        });
    });

    describe('.containsAny()', function tests() {
        var a = [1,2,3,2];
        it('checks whether array contains any of the supplied elements', function test() {
            var b = [3, 4];
            var c = [4, 5];
            assert( a.containsAny(b) === true );
            assert( a.containsAny(c) === false );
        });
    });

    describe('.removeItemAt()', function tests() {
        var a = [1, 2, 3, 2];
        it('removes the element at the specified index', function test() {
            a.removeItemAt(1);
            assert.deepEqual(a, [1, 3, 2]);
        });
    });

    describe('.pickRandom()', function tests() {
        var a = [2,3,4,5];
        it('picks a random element of the array', function test() {
            assert( a.contains( a.pickRandom() ) === true );
        });
    });

    describe('.pickRandomElements()', function tests() {
        var a = [2,3,4,5];
        it('picks random elements from the array', function test() {
            assert( a.containsAll( a.pickRandomElements(2) ) === true );
        });
        it('picks all random elements from the array if argument > length', function test() {
            var result = a.pickRandomElements(6);
            result.forEach(function(e) {
                a.contains(e);
            });
        });
    });

    describe('.remix()', function tests() {
        var a = [1, 2, 3, 4];
        it('randomly re-arranges the elements of the input array', function test() {
            var result = a.remix();
            result.forEach(function(e) {
                assert( a.contains(e) === true );
            });
        });
    });

    describe('.unique()', function tests() {
        var a = [1,2,3,2];
        it('returns an array where all duplicates are removed', function test() {
            assert.deepEqual(a.unique(), [1,2,3]);
        });
    });

    describe('.concatUnique()', function tests() {
        var a = [1,2,3,2];
        var b = [2,3,4,5];
        it('returns a concatenated array after removing already present elements', function test() {
            assert.deepEqual(a.concatUnique(b), [1,2,3,2,4,5]);
        });
    });

    describe('.orderIndices()', function tests() {
        var a = [1, 2, 5, 3, 4, 2];
        it('returns array of indices in increasing order', function test() {
            assert.deepEqual(a.orderIndices(), [0, 1, 5, 3, 4, 2]);
        });
        it('accepts a custom comparator function', function test() {
            assert.deepEqual(a.orderIndices(function(a, b){
                return a > b ? -1 : a < b ? 1 : 0;
            }), [2, 4, 3, 1, 5, 0]);
        });
    });

});
