/**
 * sortedUniqBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));
// => [1.1, 2.3]