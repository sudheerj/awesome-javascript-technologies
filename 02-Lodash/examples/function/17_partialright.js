/**
 * partialRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function greet(greeting, name) {
    return greeting + ' ' + name;
}

var greetFred = _.partialRight(greet, 'fred');
console.log(greetFred('hi'));
// => 'hi fred'

// Partially applied with placeholders.
var sayHelloTo = _.partialRight(greet, 'hello', _);
console.log(sayHelloTo('fred'));
// => 'hello fred'