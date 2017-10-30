/**
 * method example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [
    { 'a': { 'b': _.constant(2) } },
    { 'a': { 'b': _.constant(1) } }
];

console.log(_.map(objects, _.method('a.b')));
// => [2, 1]

console.log(_.map(objects, _.method(['a', 'b'])));
// => [2, 1]