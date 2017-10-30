/**
 * zipWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
    return a + b + c;
}));
// => [111, 222]