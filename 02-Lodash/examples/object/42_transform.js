/**
 * transform example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.transform([2, 3, 4], function(result, n) {
    result.push(n *= n);
    return n % 2 == 0;
}, []));
// => [4, 9]

console.log(_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
}, {}));
// => { '1': ['a', 'c'], '2': ['b'] }