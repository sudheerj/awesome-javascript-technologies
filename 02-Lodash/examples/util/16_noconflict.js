/**
 * noConflict example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var lodash = _.noConflict();
console.log(lodash);