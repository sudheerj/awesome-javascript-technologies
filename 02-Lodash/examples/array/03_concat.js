/**
 * concat example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]