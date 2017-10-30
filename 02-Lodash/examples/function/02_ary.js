/**
 * ary example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.map(['6', '8', '10'], _.ary(parseInt, 1)));
// => [6, 8, 10]