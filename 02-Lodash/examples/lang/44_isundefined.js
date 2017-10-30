/* isUndefined example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isUndefined(void 0));
// => true

console.log(_.isUndefined(null));
// => false