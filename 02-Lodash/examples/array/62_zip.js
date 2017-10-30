/**
 * zip example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.zip(['a', 'b'], [1, 2], [true, false]));
// => [['a', 1, true], ['b', 2, false]]