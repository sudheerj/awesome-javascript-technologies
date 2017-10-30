/**
 * zipObject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.zipObject(['a', 'b'], [1, 2]));
// => { 'a': 1, 'b': 2 }