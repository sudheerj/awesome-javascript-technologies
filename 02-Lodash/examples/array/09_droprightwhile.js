/**
 * dropRightWhile example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];

console.log(_.dropRightWhile(users, function(o) { return !o.active; }));
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.dropRightWhile(users, ['active', false]));
// => objects for ['barney']

// The `_.property` iteratee shorthand.
console.log(_.dropRightWhile(users, 'active'));
// => objects for ['barney', 'fred', 'pebbles']