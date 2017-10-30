/**
 * orderBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]