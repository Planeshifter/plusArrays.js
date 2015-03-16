[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]

JS-Arrays-Sugar
===============

> Extensions of the Array.prototype object

# Introduction

The package can be easily installed via npm:

```
npm install plus_arrays
```

To register the custon methods to the 'Array.prototype' object, we simply require the package

```
require(plusArrays)
```

# API

### .compare(arr)

Checks whether the array contains the same elements as `arr`. If this is the case, `true` will be returned, otherwise `false`.

### .sum()
calculates the sum of the elements in the array

### .mean()
calculates the arithmetic mean of the elements in the array

### .max()
returns the maximum element array

### .min()
returns the minimum  element array

### .clean(elem)
removes all elments in the `array` which are equal to `elem`.

### .contains(elem)
Returns `true` if the array contains `elem`, `false` otherwise.

### .pickRandom()
Returns a random element of the array.

### .pickRandomElements(no)
Returns a new array of length `no` by sampling without replacement from the original array.

### .containsAll(arr)
Returns `true` if the array contains *all* elements of Array `arr`, `false` otherwise.

### .containsAny(arr)
Returns `true` if the array contains at least one of the elements of Array `arr`, `false` otherwise.

### .removeItemAt(index)
Removes the element at position `index` such that the array ends up with one element less than before.

### .remix()
Returns a new array in which the elements of the original array are randomly re-arranged.

### .unique()
Returns a new array in which any duplicates are removed.

### .concatUnique(arr)
Concatenates array `arr` to the original array, after removing all elements present in the original array.

### .orderIndices(fun)
Returns an array of indices giving the position of the element in a sorted array. The `fun` parameter expects a custom comparator function. If none is supplied,
elements are sorted in increasing order.

## Unit Tests

Run tests via the command `npm test`

---
## License

[MIT license](http://opensource.org/licenses/MIT).

[npm-image]: https://badge.fury.io/js/plus_arrays.svg
[npm-url]: http://badge.fury.io/js/plus_arrays

[travis-image]: https://travis-ci.org/Planeshifter/plusArrays.js.svg
[travis-url]: https://travis-ci.org/Planeshifter/plusArrays.js

[coveralls-image]: https://img.shields.io/coveralls/Planeshifter/plusArrays.js/master.svg
[coveralls-url]: https://coveralls.io/r/Planeshifter/plusArrays.js?branch=master

[dependencies-image]: http://img.shields.io/david/Planeshifter/plusArrays.js.svg
[dependencies-url]: https://david-dm.org/Planeshifter/plusArrays.js
