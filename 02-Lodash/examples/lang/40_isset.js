/* isSet example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isSet(new Set));
// => true

console.log(_.isSet(new WeakSet));
// => false