/**
 * over example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var func = _.over([Math.max, Math.min]);

console.log(func(1, 2, 3, 4));
// => [4, 1]
