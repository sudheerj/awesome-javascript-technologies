/**
 * omit example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(_.omit(object, ['a', 'c']));
// => { 'b': '2' }