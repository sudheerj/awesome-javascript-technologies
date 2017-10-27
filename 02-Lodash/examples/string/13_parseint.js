/**
 * ParseInt example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.parseInt('05'));
// => 5

console.log(_.map(['04', '05','03', '02', '04'], _.parseInt));
// => [04, 05, 03, 02, 04]