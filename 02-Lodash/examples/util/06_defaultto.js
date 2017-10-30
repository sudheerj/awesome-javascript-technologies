/**
 * defaultTo example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.defaultTo(1, 10));
// => 1

console.log(_.defaultTo(undefined, 10));
// => 10