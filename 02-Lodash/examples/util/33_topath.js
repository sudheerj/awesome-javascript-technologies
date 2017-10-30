/**
 * toPath example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toPath('a.b.c'));
// => ['a', 'b', 'c']

console.log(_.toPath('a[0].b.c'));
// => ['a', '0', 'b', 'c']