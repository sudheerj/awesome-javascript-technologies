/**
 * Random example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.random(0, 9));
// => an integer between 0 and 9

console.log(_.random(9));
// => also an integer between 0 and 9

console.log(_.random(9, true));
// => a floating-point number between 0 and 9

console.log(_.random(1.2, 9.2));
// => a floating-point number between 1.2 and 9.2