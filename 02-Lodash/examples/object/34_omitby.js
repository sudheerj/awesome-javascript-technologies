/**
 * omitBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(_.omitBy(object, _.isNumber));
// => { 'b': '2' }