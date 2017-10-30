/**
 * isError example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isError(new Error));
// => true

console.log(_.isError(Error));
// => false