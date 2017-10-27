/**
 * Trim example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.trim('  lodash  '));
// => 'lodash'

console.log(_.trim('-_-lodash-_-', '_-'));
// => 'lodash'

console.log(_.map(['  lodash  ', '  utility  '], _.trim));
// => ['lodash', 'utility']