/**
 * conformsTo example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': 2 };

console.log(_.conformsTo(object, { 'b': function(n) { return n > 1; } }));
// => true

console.log(_.conformsTo(object, { 'b': function(n) { return n > 2; } }));
// => false