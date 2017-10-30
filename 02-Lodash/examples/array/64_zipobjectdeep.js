/**
 * zipObjectDeep example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }