/* isString example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isString('abc'));
// => true

console.log(_.isString(1));
// => false