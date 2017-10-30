/**
 * methodOf example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = _.times(3, _.constant),
    object = { 'a': array, 'b': array, 'c': array };

console.log(_.map(['a[2]', 'c[0]'], _.methodOf(object)));
// => [2, 0]

console.log(_.map([['a', '2'], ['c', '0']], _.methodOf(object)));
// => [2, 0]