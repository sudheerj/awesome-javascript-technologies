/**
 * chain example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 }
];

// A sequence without explicit chaining.
console.log(_(users).head());
// => { 'user': 'barney', 'age': 36 }

// A sequence with explicit chaining.
console.log(_(users)
    .chain()
    .head()
    .pick('user')
    .value());
// => { 'user': 'barney' }