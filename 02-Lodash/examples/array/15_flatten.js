/**
 * flatten example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]