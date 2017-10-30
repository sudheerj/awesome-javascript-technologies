/**
 * hasIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = _.create({ 'a': _.create({ 'b': 2 }) });

console.log(_.hasIn(object, 'a'));
// => true

console.log(_.hasIn(object, 'a.b'));
// => true

console.log(_.hasIn(object, ['a', 'b']));
// => true

console.log(_.hasIn(object, 'b'));
// => false