/**
 * StartCase example
 */

'use strict';
var _ = require('../../node_modules/lodash');


console.log(_.startCase('--foot-ball--'));
// => 'Foot Ball'

console.log(_.startCase('footBall'));
// => 'Foot Ball'

console.log(_.startCase('__FOOT_BALL__'));
// => 'FOOT BALL'