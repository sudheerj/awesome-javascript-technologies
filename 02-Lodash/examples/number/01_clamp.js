/**
 * Clamp example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.clamp(-100, -500, 500));
// => -100

console.log(_.clamp(10, -5, 5));
// => 5