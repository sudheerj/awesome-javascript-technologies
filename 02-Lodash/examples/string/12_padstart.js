/**
 * PadStart example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.padStart('jonna', 9));
// => '  jonna  '

console.log(_.padStart('jonna', 10, '=@'));
// => '=@jonna=@='

console.log(_.padStart('sudh', 10));
// => '   sudh  '