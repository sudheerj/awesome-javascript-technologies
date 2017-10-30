/* toLength example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.toLength(3.2));
// => 3

console.log(_.toLength(Number.MIN_VALUE));
// => 0

console.log(_.toLength(Infinity));
// => 4294967295

console.log(_.toLength('3.2'));
// => 3