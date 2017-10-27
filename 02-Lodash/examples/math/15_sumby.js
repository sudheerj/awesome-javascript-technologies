/**
 * SumBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'n': 3 }, { 'n': 9 }];

console.log(_.sumBy(objects, function(o) { return o.n; }));
// => { 'n': 12 }

// The `_.property` iteratee shorthand.
console.log(_.sumBy(objects, 'n'));
// => { 'n': 12 }'