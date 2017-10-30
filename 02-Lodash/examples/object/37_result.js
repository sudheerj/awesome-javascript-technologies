/**
 * result example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };

console.log(_.result(object, 'a[0].b.c1'));
// => 3

console.log(_.result(object, 'a[0].b.c2'));
// => 4

console.log(_.result(object, 'a[0].b.c3', 'default'));
// => 'default'

console.log(_.result(object, 'a[0].b.c3', _.constant('default')));
// => 'default'