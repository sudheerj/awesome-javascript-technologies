/**
 * unset example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };

_.unset(object, ['a', '0', 'b', 'c']);
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };