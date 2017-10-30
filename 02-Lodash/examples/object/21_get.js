/**
 * get example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(_.get(object, 'a[0].b.c'));
// => 3

console.log(_.get(object, ['a', '0', 'b', 'c']));
// => 3

console.log(_.get(object, 'a.b.c', 'default'));
// => 'default'