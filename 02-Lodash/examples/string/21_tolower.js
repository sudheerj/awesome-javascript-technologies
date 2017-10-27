/**
 * To Lower example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.toLower('--Foot-Ball--'));
// => '--foot-ball--'

console.log(_.toLower('footBall'));
// => 'football'

console.log(_.toLower('__FOOT_BALL__'));
// => '__foot_ball__'