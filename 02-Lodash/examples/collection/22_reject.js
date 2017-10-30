/**
 * reject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
];

console.log(_.reject(users, function(o) { return !o.active; }));
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(_.reject(users, { 'age': 40, 'active': true }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.reject(users, ['active', false]));
// => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(_.reject(users, 'active'));
// => objects for ['barney']