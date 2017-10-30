/* isSafeInteger example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isSafeInteger(3));
// => true

console.log(_.isSafeInteger(Number.MIN_VALUE));
// => false

console.log(_.isSafeInteger(Infinity));
// => false

console.log(_.isSafeInteger('3'));
// => false