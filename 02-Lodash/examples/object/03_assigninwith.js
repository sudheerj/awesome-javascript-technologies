/**
 * assignWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function customizer(objValue, srcValue) {
    return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));
// => { 'a': 1, 'b': 2 }