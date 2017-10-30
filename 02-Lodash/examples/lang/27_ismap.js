/**
 * isMap example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isMap(new Map));
// => true

console.log(_.isMap(new WeakMap));
// => false