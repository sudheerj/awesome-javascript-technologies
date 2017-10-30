/* lte example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.lte(1, 3));
// => true

console.log(_.lte(3, 3));
// => true

console.log(_.lte(3, 1));
// => false