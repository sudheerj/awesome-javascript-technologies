/**
 * memoize example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = _.memoize(_.values);
console.log(values(object));
// => [1, 2]

console.log(values(other));
// => [3, 4]

object.a = 2;
console.log(values(object));
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
console.log(values(object));
// => ['a', 'b']

// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;