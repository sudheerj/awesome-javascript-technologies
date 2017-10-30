/* isRegExp example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isRegExp(/abc/));
// => true

console.log(_.isRegExp('/abc/'));
// => false