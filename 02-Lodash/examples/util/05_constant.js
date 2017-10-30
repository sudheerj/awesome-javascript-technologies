/**
 * constant example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = _.times(2, _.constant({ 'a': 1 }));

console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]

console.log(objects[0] === objects[1]);
// => true