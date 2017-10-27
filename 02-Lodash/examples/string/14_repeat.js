/**
 * Repeat example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.repeat('@', 5));
// => '@@@@@'

console.log(_.repeat('sudheer', 2));
// => 'sudheersudheer'

console.log(_.repeat('sudheer', 0));
// => ''