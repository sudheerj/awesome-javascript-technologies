/**
 * Symbol example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var wrapped = _([1, 2]);

console.log(wrapped[Symbol.iterator]() === wrapped);
// => true

console.log(Array.from(wrapped));
// => [1, 2]