/**
 * some example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.some([null, 0, 'yes', false], Boolean));
// => true

var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];

// The `_.matches` iteratee shorthand.
console.log(_.some(users, { 'user': 'barney', 'active': false }));
// => false

// The `_.matchesProperty` iteratee shorthand.
console.log(_.some(users, ['active', false]));
// => true

// The `_.property` iteratee shorthand.
console.log(_.some(users, 'active'));
// => true