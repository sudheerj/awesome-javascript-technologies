/**
 * isArguments example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isArguments(function() { return arguments; }()));
// => true

console.log(_.isArguments([1, 2, 3]));
// => false