/**
 * gte example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.gte(3, 1));
// => true

console.log(_.gte(3, 3));
// => true

console.log(_.gte(1, 3));
// => false