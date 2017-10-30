/**
 * eq example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.mean([1, 3, 5, 7]));
// => 4

var object = { 'a': 1 };
var other = { 'a': 1 };

console.log(_.eq(object, object));
// => true

console.log(_.eq(object, other));
// => false

console.log(_.eq('a', 'a'));
// => true

console.log(_.eq('a', Object('a')));
// => false

console.log(_.eq(NaN, NaN));
// => true