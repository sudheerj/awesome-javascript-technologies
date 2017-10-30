/**
 * stubArray example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var arrays = _.times(2, _.stubArray);

console.log(arrays);
// => [[], []]

console.log(arrays[0] === arrays[1]);
// => false