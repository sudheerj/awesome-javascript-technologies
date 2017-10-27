/**
 * EndsWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.endsWith('sudheer', 'r'));
// => true

console.log(_.endsWith('sudheer', 'h'));
// => false

console.log(_.endsWith('sudheer', 'h', 4));
// => true