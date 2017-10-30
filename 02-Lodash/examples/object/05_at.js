/**
 * at example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

console.log(_.at(object, ['a[0].b.c', 'a[1]']));
// => [3, 4]