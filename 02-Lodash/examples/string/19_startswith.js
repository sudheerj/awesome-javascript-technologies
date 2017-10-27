/**
 * StartsWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.startsWith('lodash', 'l'));
// => true

console.log(_.startsWith('lodash', 'd'));
// => false

console.log(_.startsWith('lodash', 's', 4));
// => true