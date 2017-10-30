/**
 * range example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.range(4));
// => [0, 1, 2, 3]

console.log(_.range(-4));
// => [0, -1, -2, -3]

console.log(_.range(1, 5));
// => [1, 2, 3, 4]

console.log(_.range(0, 20, 5));
// => [0, 5, 10, 15]

console.log(_.range(0, -4, -1));
// => [0, -1, -2, -3]

console.log(_.range(1, 4, 0));
// => [1, 1, 1]

console.log(_.range(0));
// => []