/**
 * fill example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [1, 2, 3];

console.log(_.fill(array, 'a'));
console.log(array);
// => ['a', 'a', 'a']

console.log(_.fill(Array(3), 2));
// => [2, 2, 2]

console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
// => [4, '*', '*', 10]