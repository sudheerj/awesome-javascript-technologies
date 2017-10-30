/**
 * reduce example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.reduce([1, 2], function(sum, n) {
    return sum + n;
}, 0));
// => 3

console.log(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}));
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)