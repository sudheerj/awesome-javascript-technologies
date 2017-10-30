/* toFinite example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toFinite(3.2));
// => 3.2

console.log(_.toFinite(Number.MIN_VALUE));
// => 5e-324

console.log(_.toFinite(Infinity));
// => 1.7976931348623157e+308

console.log(_.toFinite('3.2'));
// => 3.2