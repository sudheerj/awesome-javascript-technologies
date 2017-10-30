/**
 * mapKeys example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
    return key + value;
}));
// => { 'a1': 1, 'b2': 2 }