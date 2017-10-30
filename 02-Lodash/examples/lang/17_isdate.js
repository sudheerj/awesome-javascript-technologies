/**
 * isDate example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isDate(new Date));
// => true

console.log(_.isDate('Mon April 23 2012'));
// => false