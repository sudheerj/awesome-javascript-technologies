/**
 * has example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });

console.log(_.has(object, 'a'));
// => true

console.log(_.has(object, 'a.b'));
// => true

console.log(_.has(object, ['a', 'b']));
// => true

console.log(_.has(other, 'a'));
// => false