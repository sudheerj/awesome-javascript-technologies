/**
 * isArrayBuffer example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isArrayBuffer(new ArrayBuffer(2)));
// => true

console.log(_.isArrayBuffer(new Array(2)));
// => false