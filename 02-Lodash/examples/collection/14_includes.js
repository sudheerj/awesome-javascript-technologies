/**
 * includes example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.includes([1, 2, 3], 1));
// => true

console.log(_.includes([1, 2, 3], 1, 2));
// => false

console.log(_.includes({ 'a': 1, 'b': 2 }, 1));
// => true

console.log(_.includes('abcd', 'bc'));
// => true