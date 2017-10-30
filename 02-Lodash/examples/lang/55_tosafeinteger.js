/* toSafeInteger example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toSafeInteger(3.2));
// => 3

console.log(_.toSafeInteger(Number.MIN_VALUE));
// => 0

console.log(_.toSafeInteger(Infinity));
// => 9007199254740991

console.log(_.toSafeInteger('3.2'));
// => 3