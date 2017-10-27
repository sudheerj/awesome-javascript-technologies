/**
 * Round example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.round(8.003));
// => 8

console.log(_.round(2.00004, 3));
// => 2

console.log(_.round(1235, -3));
// => 1000