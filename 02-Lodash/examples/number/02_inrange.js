/**
 * InRange example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.inRange(3, 2, 4));
// => true

console.log(_.inRange(4, 8));
// => true

console.log(_.inRange(4, 2));
// => false

console.log(_.inRange(2, 2));
// => false

console.log(_.inRange(1.2, 2));
// => true

console.log(_.inRange(5.2, 4));
// => false

console.log(_.inRange(-3, -2, -6));
// => true