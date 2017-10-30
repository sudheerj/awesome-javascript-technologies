/**
 * differenceWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));
// => [{ 'x': 2, 'y': 1 }]