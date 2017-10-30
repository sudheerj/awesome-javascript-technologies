/**
 * isFinite example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isFinite(3));
// => true

console.log(_.isFinite(Number.MIN_VALUE));
// => true

console.log(_.isFinite(Infinity));
// => false

console.log(_.isFinite('3'));
// => false