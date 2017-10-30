/**
 * pullAt example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']