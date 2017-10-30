/**
 * unary example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.map(['6', '8', '10'], _.unary(parseInt)));
// => [6, 8, 10]