/**
 * map example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function square(n) {
    return n * n;
}

console.log(_.map([4, 8], square));
// => [16, 64]

console.log(_.map({ 'a': 4, 'b': 8 }, square));
// => [16, 64] (iteration order is not guaranteed)

var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
console.log(_.map(users, 'user'));
// => ['barney', 'fred']