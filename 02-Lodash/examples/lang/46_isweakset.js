/* isWeakSet example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isWeakSet(new WeakSet));
// => true

console.log(_.isWeakSet(new Set));
// => false