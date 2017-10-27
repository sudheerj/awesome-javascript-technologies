/**
 * Floor example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.floor(8.003));
// => 8

console.log(_.floor(2.00004, 3));
// => 2

console.log(_.floor(1235, -3));
// => 1000