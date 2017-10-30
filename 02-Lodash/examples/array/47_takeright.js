/**
 * takeRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.takeRight([1, 2, 3]));
// => [3]

console.log(_.takeRight([1, 2, 3], 2));
// => [2, 3]

console.log(_.takeRight([1, 2, 3], 5));
// => [1, 2, 3]

console.log(_.takeRight([1, 2, 3], 0));
// => []