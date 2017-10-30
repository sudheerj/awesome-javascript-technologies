/**
 * next example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var wrapped = _([1, 2]);

console.log(wrapped.next());
// => { 'done': false, 'value': 1 }

console.log(wrapped.next());
// => { 'done': false, 'value': 2 }

console.log(wrapped.next());
// => { 'done': true, 'value': undefined }