/**
 * invoke example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

console.log(_.invoke(object, 'a[0].b.c.slice', 1, 3));
// => [2, 3]