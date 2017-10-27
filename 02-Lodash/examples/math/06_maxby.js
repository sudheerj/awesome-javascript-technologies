/**
 * MaxBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'n': 3 }, { 'n': 9 }];

console.log(_.maxBy(objects, function(o) { return o.n; }));
// => { 'n': 9 }

// The `_.property` iteratee shorthand.
console.log(_.maxBy(objects, 'n'));
// => { 'n': 9 }