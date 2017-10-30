/**
 * isMatch example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': 2 };

console.log(_.isMatch(object, { 'b': 2 }));
// => true

console.log(_.isMatch(object, { 'b': 1 }));
// => false