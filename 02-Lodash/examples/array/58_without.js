/**
 * without example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.without([2, 1, 2, 3], 1, 2));
// => [3]