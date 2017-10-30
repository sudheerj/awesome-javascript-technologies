/**
 * propertyOf example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };

console.log(_.map(['a[2]', 'c[0]'], _.propertyOf(object)));
// => [2, 0]

console.log(_.map([['a', '2'], ['c', '0']], _.propertyOf(object)));
// => [2, 0]