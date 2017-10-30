/* toNumber example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toNumber(3.2));
// => 3.2

console.log(_.toNumber(Number.MIN_VALUE));
// => 5e-324

console.log(_.toNumber(Infinity));
// => Infinity

console.log(_.toNumber('3.2'));
// => 3.2