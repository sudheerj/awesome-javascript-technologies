/**
 * overSome example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var func = _.overSome([Boolean, isFinite]);

console.log(func('1'));
// => true

console.log(func(null));
// => true

console.log(func(NaN));
// => false