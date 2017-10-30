/**
 * overArgs example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function doubled(n) {
    return n * 2;
}

function square(n) {
    return n * n;
}

var func = _.overArgs(function(x, y) {
    return [x, y];
}, [square, doubled]);

console.log(func(9, 3));
// => [81, 6]

console.log(func(10, 5));
// => [100, 10]