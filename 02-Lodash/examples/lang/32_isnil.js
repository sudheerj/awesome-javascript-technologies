
/**
 * isNil example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.isNil(null));
// => true

console.log(_.isNil(void 0));
// => true

console.log(_.isNil(NaN));
// => false