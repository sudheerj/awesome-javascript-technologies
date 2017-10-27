/**
 * To Upper example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toUpper('--Foot-Ball--'));
// => '--FOOT-BALL--'

console.log(_.toUpper('footBall'));
// => 'FOOTBALL'

console.log(_.toUpper('__FOOT_BALL__'));
// => '__FOOT_BALL__'