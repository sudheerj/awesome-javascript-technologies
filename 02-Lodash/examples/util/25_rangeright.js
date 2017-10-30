/**
 * rangeRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.rangeRight(4));
// => [3, 2, 1, 0]

console.log(_.rangeRight(-4));
// => [-3, -2, -1, 0]

console.log(_.rangeRight(1, 5));
// => [4, 3, 2, 1]

console.log(_.rangeRight(0, 20, 5));
// => [15, 10, 5, 0]

console.log(_.rangeRight(0, -4, -1));
// => [-3, -2, -1, 0]

console.log(_.rangeRight(1, 4, 0));
// => [1, 1, 1]

console.log(_.rangeRight(0));
// => []