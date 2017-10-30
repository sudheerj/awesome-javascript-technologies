/**
 * invert example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': 2, 'c': 1 };

console.log(_.invert(object));
// => { '1': 'c', '2': 'b' }