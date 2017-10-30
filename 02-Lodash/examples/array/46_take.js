/**
 * take example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.take([1, 2, 3]));
// => [1]

console.log(_.take([1, 2, 3], 2));
// => [1, 2]

console.log(_.take([1, 2, 3], 5));
// => [1, 2, 3]

console.log(_.take([1, 2, 3], 0));
// => []