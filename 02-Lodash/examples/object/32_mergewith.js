/**
 * mergeWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}

var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };

console.log(_.mergeWith(object, other, customizer));
// => { 'a': [1, 3], 'b': [2, 4] }