/**
 * intersectionBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [2.1]

// The `_.property` iteratee shorthand.
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
// => [{ 'x': 1 }]
// => ['lodash', 'utility']