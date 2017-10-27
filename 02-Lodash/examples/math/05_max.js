/**
 * Max example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.max([1, 3, 5, 7]));
// => 7

console.log(_.max([]));
// => undefined