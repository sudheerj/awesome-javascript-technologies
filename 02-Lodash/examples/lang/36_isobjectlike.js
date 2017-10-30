/* isObjectLike example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.isObjectLike({}));
// => true

console.log(_.isObjectLike([1, 2, 3]));
// => true

console.log(_.isObjectLike(_.noop));
// => false

console.log(_.isObjectLike(null));
// => false