/**
 * func example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var func = _.overEvery([Boolean, isFinite]);

console.log(func('1'));
// => true

console.log(func(null));
// => false

console.log(func(NaN));
// => false