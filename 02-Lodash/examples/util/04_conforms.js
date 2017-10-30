/**
 * conforms example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
];

console.log(_.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } })));
// => [{ 'a': 1, 'b': 2 }]