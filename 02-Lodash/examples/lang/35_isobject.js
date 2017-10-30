/* isObject example
*/

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isObject({}));
// => true

console.log(_.isObject([1, 2, 3]));
// => true

console.log(_.isObject(_.noop));
// => true

console.log(_.isObject(null));
// => false