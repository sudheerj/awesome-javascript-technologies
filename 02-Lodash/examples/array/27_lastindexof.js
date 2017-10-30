/**
 * lastIndexOf example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(__.lastIndexOf([1, 2, 1, 2], 2));
// => 3

// Search from the `fromIndex`.
console.log(__.lastIndexOf([1, 2, 1, 2], 2, 2));
// => 1