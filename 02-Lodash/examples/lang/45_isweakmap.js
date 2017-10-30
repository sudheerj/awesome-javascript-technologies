/* isWeakMap example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isWeakMap(new WeakMap));
// => true

console.log(_.isWeakMap(new Map));
// => false