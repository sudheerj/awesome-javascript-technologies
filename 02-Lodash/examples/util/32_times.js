/**
 * times example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.times(3, String));
// => ['0', '1', '2']

console.log(_.times(4, _.constant(0)));
// => [0, 0, 0, 0]