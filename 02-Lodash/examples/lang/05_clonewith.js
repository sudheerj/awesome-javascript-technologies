/**
 * cloneWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function customizer(value) {
    if (_.isElement(value)) {
        return value.cloneNode(false);
    }
}

var el = _.cloneWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0
Try in REPL
