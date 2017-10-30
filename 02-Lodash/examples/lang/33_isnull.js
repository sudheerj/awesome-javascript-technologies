
/**
 * isNull example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isNull(null));
// => true

console.log(_.isNull(void 0));
// => false