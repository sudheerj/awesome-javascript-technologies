/**
 * curry example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var abc = function(a, b, c) {
    return [a, b, c];
};

var curried = _.curry(abc);

console.log(curried(1)(2)(3));
// => [1, 2, 3]

console.log(curried(1, 2)(3));
// => [1, 2, 3]

console.log(curried(1, 2, 3));
// => [1, 2, 3]

// Curried with placeholders.
console.log(curried(1)(_, 3)(2));
// => [1, 2, 3]