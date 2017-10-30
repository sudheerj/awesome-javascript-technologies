/**
 * negate example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function isEven(n) {
    return n % 2 == 0;
}

console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven)));
// => [1, 3, 5]