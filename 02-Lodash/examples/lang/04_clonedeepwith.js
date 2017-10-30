/**
 * cloneDeepWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function customizer(value) {
    if (_.isElement(value)) {
        return value.cloneNode(true);
    }
}

var el = _.cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20