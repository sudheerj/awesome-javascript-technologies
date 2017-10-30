/* toInteger example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toInteger(3.2));
// => 3

console.log(_.toInteger(Number.MIN_VALUE));
// => 0

console.log(_.toInteger(Infinity));
// => 1.7976931348623157e+308

console.log(_.toInteger('3.2'));
// => 3