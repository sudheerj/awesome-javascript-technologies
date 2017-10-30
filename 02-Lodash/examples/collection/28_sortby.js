/**
 * sortBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
];

console.log(_.sortBy(users, [function(o) { return o.user; }]));
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

console.log(_.sortBy(users, ['user', 'age']));
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]