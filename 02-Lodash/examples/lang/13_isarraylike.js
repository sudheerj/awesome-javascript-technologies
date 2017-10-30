/**
 * isArrayLike example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.isArrayLike([1, 2, 3]));
// => true

console.log(_.isArrayLike(document.body.children));
// => true

console.log(_.isArrayLike('abc'));
// => true

console.log(_.isArrayLike(_.noop));
// => false