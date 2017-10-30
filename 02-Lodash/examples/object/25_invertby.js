/**
 * invertBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = { 'a': 1, 'b': 2, 'c': 1 };

console.log(_.invertBy(object));
// => { '1': ['a', 'c'], '2': ['b'] }

console.log(_.invertBy(object, function(value) {
    return 'group' + value;
}));
// => { 'group1': ['a', 'c'], 'group2': ['b'] }