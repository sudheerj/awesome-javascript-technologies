/**
 * TrimStart example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.trimStart('  lodash  '));
// => '   lodash'

console.log(_.trimStart('-_-lodash-_-', '_-'));
// => '-_-lodash'

console.log(_.map(['  lodash  ', '  utility  '], _.trimStart));
// => ['  lodash', '  utility']