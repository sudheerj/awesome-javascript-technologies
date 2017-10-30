/**
 * size example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.size([1, 2, 3]));
// => 3

console.log(_.size({ 'a': 1, 'b': 2 }));
// => 2

console.log(_.size('pebbles'));
// => 7
