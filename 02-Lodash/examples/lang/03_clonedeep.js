/**
 * cloneDeep example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep);
console.log(deep[0] === objects[0]);
// => false