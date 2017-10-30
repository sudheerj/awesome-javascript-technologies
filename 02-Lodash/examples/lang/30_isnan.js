/**
 * isNaN example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isNaN(NaN));
// => true

console.log(_.isNaN(new Number(NaN)));
// => true

console.log(isNaN(undefined));
// => true

console.log(_.isNaN(undefined));
// => false