/**
 * isInteger example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isInteger(3));
// => true

console.log(_.isInteger(Number.MIN_VALUE));
// => false

console.log(_.isInteger(Infinity));
// => false

console.log(_.isInteger('3'));
// => false