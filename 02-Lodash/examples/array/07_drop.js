/**
 * drop example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.drop([1, 2, 3]));
// => [2, 3]

console.log(_.drop([1, 2, 3], 2));
// => [3]

console.log(_.drop([1, 2, 3], 5));
// => []

console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]