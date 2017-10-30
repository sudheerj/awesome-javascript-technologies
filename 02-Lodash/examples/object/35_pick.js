/**
 * pick example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(_.pick(object, ['a', 'c']));
// => { 'a': 1, 'c': 3 }