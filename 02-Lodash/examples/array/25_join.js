/**
 * join example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.join(['a', 'b', 'c'], '~'));
// => 'a~b~c'