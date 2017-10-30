/**
 * stubObject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = _.times(2, _.stubObject);

console.log(objects);
// => [{}, {}]

console.log(objects[0] === objects[1]);
// => false