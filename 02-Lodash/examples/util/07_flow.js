/**
 * flow example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function square(n) {
    return n * n;
}

var addSquare = _.flow([_.add, square]);
console.log(addSquare(1, 2));
// => 9