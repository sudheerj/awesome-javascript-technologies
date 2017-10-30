/**
 * unionBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
console.log(_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
// => [{ 'x': 1 }, { 'x': 2 }]