/**
 * pullAll example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']