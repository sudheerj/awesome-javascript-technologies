/**
 * isEmpty example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isEmpty(null));
// => true

console.log(_.isEmpty(true));
// => true

console.log(_.isEmpty(1));
// => true

console.log(_.isEmpty([1, 2, 3]));
// => false

console.log(_.isEmpty({ 'a': 1 }));
// => false