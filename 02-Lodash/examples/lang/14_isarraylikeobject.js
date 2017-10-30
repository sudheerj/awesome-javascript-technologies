/**
 * isArrayLikeObject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isArrayLikeObject([1, 2, 3]));
// => true

console.log(_.isArrayLikeObject(document.body.children));
// => true

console.log(_.isArrayLikeObject('abc'));
// => false

console.log(_.isArrayLikeObject(_.noop));
// => false