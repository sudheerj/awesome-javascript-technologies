/**
 * isEqualWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function isGreeting(value) {
    return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
    if (isGreeting(objValue) && isGreeting(othValue)) {
        return true;
    }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

console.log(_.isEqualWith(array, other, customizer));
// => true