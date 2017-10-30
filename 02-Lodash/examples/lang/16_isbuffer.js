/**
 * isBuffer example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isBuffer(new Buffer(2)));
// => true

console.log(_.isBuffer(new Uint8Array(2)));
// => false