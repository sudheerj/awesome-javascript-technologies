/**
 * MinBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'n': 3 }, { 'n': 9 }];

console.log(_.minBy(objects, function(o) { return o.n; }));
// => { 'n': 3 }

// The `_.property` iteratee shorthand.
console.log(_.minBy(objects, 'n'));
// => { 'n': 3 }'