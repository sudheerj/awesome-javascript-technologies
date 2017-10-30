/**
 * clone example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.clone(objects);
console.log(shallow);
console.log(shallow[0] === objects[0]);
// => true