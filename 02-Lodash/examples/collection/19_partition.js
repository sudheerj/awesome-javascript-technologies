/**
 * partition example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

console.log(_.partition(users, function(o) { return o.active; }));
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
console.log(_.partition(users, { 'age': 1, 'active': false }));
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
console.log(_.partition(users, ['active', false]));
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
console.log(_.partition(users, 'active'));
// => objects for [['fred'], ['barney', 'pebbles']]