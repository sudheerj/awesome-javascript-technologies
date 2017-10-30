/**
 * findLastIndex example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(_.findLastIndex(users, function(o) { return o.user == 'barney'; }));
// => 2

// The `_.matches` iteratee shorthand.
console.log(_.findLastIndex(users, { 'user': 'fred', 'active': false }));
// => 0

// The `_.matchesProperty` iteratee shorthand.
console.log(_.findLastIndex(users, ['active', false]));
// => 2

// The `_.property` iteratee shorthand.
console.log(_.findLastIndex(users, 'active'));
// => 0