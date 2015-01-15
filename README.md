[![NPM version](https://badge.fury.io/js/plus_arrays.svg)](http://badge.fury.io/js/plus_arrays)
[![Build Status](https://travis-ci.org/Planeshifter/plusArrays.js.svg?branch=master)](https://travis-ci.org/Planeshifter/plusArrays.js)

JS-Arrays-Sugar
===============

Extensions of the Array.prototype object

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

## .compare(arr)

Checks whether the array contains the same elements as `arr`. If this is the case, `true` will be returned, otherwise `false`.

## .sum()
calculates the sum of the elements in the array 

## .mean()
calculates the arithmetic mean of the elements in the array 

## .max()
returns the maximum element array

## .min()
returns the minimum  element array

## .clean()

## .contains(elem)
Returns `true` if the array contains `elem`, `false` otherwise.

## .pickRandom()
Returns a random element of the array.

## .pickRandomElements(no)
Returns a new array of length `no` by sampling without replacement from the original array.

## .containsAll(arr)
Returns `true` if the array contains *all* elements of Array `arr`, `false` otherwise.

## .containsAny(arr)
Returns `true` if the array contains at least one of the elements of Array `arr`, `false` otherwise.

## .removeItemAt(index)
Removes the element at position `index` such that the array ends up with one element less than before.

## .remix()
Returns a new array in which the elements of the original array are randomly re-arranged.

## .unique()

## .concatUnique()
