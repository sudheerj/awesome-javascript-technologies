/**
 * tap example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_([1, 2, 3])
    .tap(function(array) {
// Mutate input array.
        array.pop();
    })
    .reverse()
    .value());
// => [2, 1]