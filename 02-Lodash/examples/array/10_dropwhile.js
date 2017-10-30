/**
 * dropWhile example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(_.dropWhile(users, function(o) { return !o.active; }));
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }));
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.dropWhile(users, ['active', false]));
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
console.log(_.dropWhile(users, 'active'));
// => objects for ['barney', 'fred', 'pebbles']