/* isTypedArray example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isTypedArray(new Uint8Array));
// => true

console.log(_.isTypedArray([]));
// => false