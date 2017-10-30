/**
 * findKey example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

console.log(_.findKey(users, function(o) { return o.age < 40; }));
// => 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
console.log(_.findKey(users, { 'age': 1, 'active': true }));
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
console.log(_.findKey(users, ['active', false]));
// => 'fred'

// The `_.property` iteratee shorthand.
console.log(_.findKey(users, 'active'));
// => 'barney'