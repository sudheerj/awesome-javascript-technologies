/**
 * KebabCase example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.kebabCase('Foot Ball'));
// => 'foot-ball'

console.log(_.kebabCase('footBall'));
// => 'foot-ball'

console.log(_.kebabCase('__FOOT_BALL__'));
// => 'foot-ball'