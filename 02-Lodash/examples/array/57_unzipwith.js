/**
 * unzipWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

console.log(_.unzipWith(zipped, _.add));
// => [3, 30, 300]