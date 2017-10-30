/**
 * defaults example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(__.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));
// => { 'a': 1, 'b': 2 }