/**
 * TrimEnd example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.trimEnd('  lodash  '));
// => '   lodash'

console.log(_.trimEnd('-_-lodash-_-', '_-'));
// => '-_-lodash'

console.log(_.map(['  lodash  ', '  utility  '], _.trimEnd));
// => ['  lodash', '  utility']