/**
 * nthArg example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var func = _.nthArg(1);
console.log(func('a', 'b', 'c', 'd'));
// => 'b'

var func = _.nthArg(-2);
console.log(func('a', 'b', 'c', 'd'));
// => 'c'