/**
 * isFunction example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isFunction(_));
// => true

console.log(_.isFunction(/abc/));
// => false