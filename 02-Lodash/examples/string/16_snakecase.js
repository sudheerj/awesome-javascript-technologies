/**
 * SnakeCase example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.snakeCase('Foot Ball'));
// => 'foot_ball'

console.log(_.snakeCase('footBall'));
// => 'foot_ball'

console.log(_.snakeCase('--FOOT-BALL--'));
// => 'foot_ball'