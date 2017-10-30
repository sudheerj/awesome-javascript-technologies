/**
 * flowRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function square(n) {
    return n * n;
}

var addSquare = _.flowRight([square, _.add]);
console.log(addSquare(1, 2));
// => 9