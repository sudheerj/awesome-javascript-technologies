/**
 * castArray example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.castArray(1));
// => [1]

console.log(_.castArray({ 'a': 1 }));
// => [{ 'a': 1 }]

console.log(_.castArray('abc'));
// => ['abc']

console.log(_.castArray(null));
// => [null]

console.log(_.castArray(undefined));
// => [undefined]

console.log(_.castArray());
// => []

var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true