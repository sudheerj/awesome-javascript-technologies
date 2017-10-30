/**
 * partial example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function greet(greeting, name) {
    return greeting + ' ' + name;
}

var sayHelloTo = _.partial(greet, 'hello');
console.log(sayHelloTo('fred'));
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
console.log(greetFred('hi'));
// => 'hi fred'