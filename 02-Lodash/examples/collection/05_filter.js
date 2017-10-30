/**
 * filter example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.filter(users, function(o) { return !o.active; }));
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(_.filter(users, { 'age': 36, 'active': true }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.filter(users, ['active', false]));
// => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(_.filter(users, 'active'));
// => objects for ['barney']