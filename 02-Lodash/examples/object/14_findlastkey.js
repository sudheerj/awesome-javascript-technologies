/**
 * findLastKey example
 */

'use strict';
var _ = require('../../node_modules/lodash');
var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

console.log(__.findLastKey(users, function(o) { return o.age < 40; }));
// => returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
console.log(__.findLastKey(users, { 'age': 36, 'active': true }));
// => 'barney'

// The `_.matchesProperty` iteratee shorthand.
console.log(__.findLastKey(users, ['active', false]));
// => 'fred'

// The `_.property` iteratee shorthand.
console.log(__.findLastKey(users, 'active'));
// => 'pebbles'