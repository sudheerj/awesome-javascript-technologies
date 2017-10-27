/**
 * CamelCase example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.camelCase('Foot Ball'));
// => 'footBall'

console.log(_.camelCase('--foot-ball--'));
// => 'footBall'

console.log(_.camelCase('__FOOT_BALL__'));
// => 'footBall'