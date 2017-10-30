/**
 * property example
 */

'use strict';
var _ = require('../../node_modules/lodash');


var objects = [
    { 'a': { 'b': 2 } },
    { 'a': { 'b': 1 } }
];

console.log(_.map(objects, _.property('a.b')));
// => [2, 1]

console.log(_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b'));
// => [1, 2]