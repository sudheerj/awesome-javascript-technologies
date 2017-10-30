/**
 * chunk example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));
// => [['a', 'b'], ['c', 'd'], ['e', 'f']]

console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3));
// => [['a', 'b', 'c'], ['d', 'e', 'f']]