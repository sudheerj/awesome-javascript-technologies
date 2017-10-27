/**
 * Ceil example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.ceil(8.003));
// => 9

console.log(_.ceil(2.00004, 3));
// => 2.001

console.log(_.ceil(1235, -3));
// => 2000