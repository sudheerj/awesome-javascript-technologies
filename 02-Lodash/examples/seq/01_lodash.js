/**
 * lodash example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function square(n) {
    return n * n;
}

var wrapped = _([1, 2, 3]);

// Returns an unwrapped value.
console.log(wrapped.reduce(_.add));
// => 6

// Returns a wrapped value.
var squares = wrapped.map(square);

console.log(_.isArray(squares));
// => false

console.log(_.isArray(squares.value()));
// => true