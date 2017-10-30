/* lt example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.lt(1, 3));
// => true

console.log(_.lt(3, 3));
// => false

console.log(_.lt(3, 1));
// => false