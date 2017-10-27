/**
 * PadEnd example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.padEnd('jonna', 9));
// => 'jonna    '

console.log(_.padEnd('jonna', 10, '=@'));
// => 'jonna=@=@='

console.log(_.padEnd('sudh', 10));
// => 'sudh      '