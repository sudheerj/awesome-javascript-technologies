/**
 * flattenDepth example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [1, [2, [3, [4]], 5]];

console.log(_.flattenDepth(array, 1));
// => [1, 2, [3, [4]], 5]

console.log(_.flattenDepth(array, 2));
// => [1, 2, 3, [4], 5]