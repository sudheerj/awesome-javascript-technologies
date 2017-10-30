/* toString example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toString(null));
// => ''

console.log(_.toString(-0));
// => '-0'

console.log(_.toString([1, 2, 3]));
// => '1,2,3'