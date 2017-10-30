/**
 * isLength example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isLength(3));
// => true

console.log(_.isLength(Number.MIN_VALUE));
// => false

console.log(_.isLength(Infinity));
// => false

console.log(_.isLength('3'));
// => false