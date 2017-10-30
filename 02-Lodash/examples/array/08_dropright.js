/**
 * dropRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.dropRight([1, 2, 3]));
// => [1, 2]

console.log(_.dropRight([1, 2, 3], 2));
// => [1]

console.log(_.dropRight([1, 2, 3], 5));
// => []

console.log(_.dropRight([1, 2, 3], 0));
// => [1, 2, 3]