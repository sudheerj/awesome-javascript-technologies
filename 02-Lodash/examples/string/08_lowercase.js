/**
 * LowerCase example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.lowerCase('Foot Ball'));
// => 'foot ball'

console.log(_.lowerCase('footBall'));
// => 'foot ball'

console.log(_.lowerCase('__FOOT_BALL__'));
// => 'foot ball'