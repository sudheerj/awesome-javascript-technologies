/**
 * Upper Case example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.upperCase('--foot-ball'));
// => 'FOOT BALL'

console.log(_.upperCase('footBall'));
// => 'FOOT BALL'

console.log(_.upperCase('__foot_ball__'));
// => 'FOOT BALL'