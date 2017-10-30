
/**
 * isNative example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isNative(Array.prototype.push));
// => true

console.log(_.isNative(_));
// => false