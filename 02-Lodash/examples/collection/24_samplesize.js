/**
 * sampleSize example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.sampleSize([1, 2, 3], 2));
// => [3, 1]

console.log(_.sampleSize([1, 2, 3], 4));
// => [2, 3, 1]