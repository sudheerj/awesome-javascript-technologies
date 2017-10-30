/**
 * matchesProperty example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];

console.log(_.find(objects, _.matchesProperty('a', 4)));
// => { 'a': 4, 'b': 5, 'c': 6 }