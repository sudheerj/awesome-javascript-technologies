/**
 * gt example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.gt(3, 1));
// => true

console.log(_.gt(3, 3));
// => false

console.log(_.gt(1, 3));
// => false