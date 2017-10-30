/**
 * intersectionWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

console.log(_.intersectionWith(objects, others, _.isEqual));
// => [{ 'x': 1, 'y': 2 }]