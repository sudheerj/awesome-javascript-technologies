/**
 * nth example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = ['a', 'b', 'c', 'd'];

console.log(_.nth(array, 1));
// => 'b'

console.log(_.nth(array, -2));
// => 'c';