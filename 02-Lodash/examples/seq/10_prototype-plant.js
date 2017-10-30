/**
 * plant example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function square(n) {
    return n * n;
}

var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);

console.log(other.value());
// => [9, 16]

console.log(wrapped.value());
// => [1, 4]