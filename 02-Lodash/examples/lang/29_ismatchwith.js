/**
 * isMatchWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function isGreeting(value) {
    return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
    if (isGreeting(objValue) && isGreeting(srcValue)) {
        return true;
    }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

console.log(_.isMatchWith(object, source, customizer));
// => true