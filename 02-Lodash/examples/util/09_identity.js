/**
 * identity example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1 };

console.log(_.identity(object) === object);
// => true