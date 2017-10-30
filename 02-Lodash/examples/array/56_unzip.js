/**
 * unzip example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(zipped);
// => [['a', 1, true], ['b', 2, false]]

console.log(_.unzip(zipped));
// => [['a', 'b'], [1, 2], [true, false]]