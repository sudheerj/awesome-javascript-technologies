/**
 * iteratee example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

// The `_.matches` iteratee shorthand.
console.log(_.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]

// The `_.matchesProperty` iteratee shorthand.
console.log(_.filter(users, _.iteratee(['user', 'fred']));
// => [{ 'user': 'fred', 'age': 40 }]

// The `_.property` iteratee shorthand.
console.log(_.map(users, _.iteratee('user'));
// => ['barney', 'fred']

// Create custom iteratee shorthands.
console.log(_.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
    return !_.isRegExp(func) ? iteratee(func) : function(string) {
        return func.test(string);
    };
}));

console.log(_.filter(['abc', 'def'], /ef/));
// => ['def']