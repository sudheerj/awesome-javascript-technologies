/* toArray example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toArray({ 'a': 1, 'b': 2 }));
// => [1, 2]

console.log(_.toArray('abc'));
// => ['a', 'b', 'c']

console.log(_.toArray(1));
// => []

console.log(_.toArray(null));
// => []