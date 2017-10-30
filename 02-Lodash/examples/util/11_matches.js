/**
 * matches example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];

console.log(_.filter(objects, _.matches({ 'a': 4, 'c': 6 })));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]