/**
 * Min example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.min([1, 3, 5, 7]));
// => 1

console.log(_.min([]));
// => undefined