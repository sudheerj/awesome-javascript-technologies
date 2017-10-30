/**
 * compact example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.compact([0, 1, false, 2, '', 3, 4]));
// => [1, 2, 3, 4]