/**
 * pull example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log(_.pull(array, 'a', 'c'));
console.log(array);
// => ['b', 'b']