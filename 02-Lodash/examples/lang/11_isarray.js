/**
 * isArray example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isArray([1, 2, 3]));
// => true

console.log(_.isArray(document.body.children));
// => false

console.log(_.isArray('abc'));
// => false

console.log(_.isArray(_.noop));
// => false