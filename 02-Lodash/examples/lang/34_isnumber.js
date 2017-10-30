
/**
 * isNumber example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isNumber(3));
// => true

console.log(_.isNumber(Number.MIN_VALUE));
// => true

console.log(_.isNumber(Infinity));
// => true

console.log(_.isNumber('3'));
// => false