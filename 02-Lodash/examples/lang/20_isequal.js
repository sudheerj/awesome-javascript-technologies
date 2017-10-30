/**
 * isEqual example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1 };
var other = { 'a': 1 };

console.log(_.isEqual(object, other));
// => true

console.log(object === other);
// => false