/**
 * head example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.head([1, 2, 3]));
// => 1

console.log(_.head([]));
// => undefined
