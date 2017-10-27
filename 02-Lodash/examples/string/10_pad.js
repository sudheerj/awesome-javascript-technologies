/**
 * Pad example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.pad('jonna', 9));
// => '  jonna  '

console.log(_.pad('jonna', 10, '=@'));
// => '=@jonna=@='

console.log(_.pad('sudh', 10));
// => '   sudh  '