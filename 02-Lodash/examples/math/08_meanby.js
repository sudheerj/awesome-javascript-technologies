/**
 * MeanBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'n': 1 }, { 'n': 3 }, { 'n': 5}, { 'n': 7 }];

console.log(_.meanBy(objects, function(o) { return o.n; }));
// => 4

// The `_.property` iteratee shorthand.
console.log(_.meanBy(objects, 'n'));
// => 4