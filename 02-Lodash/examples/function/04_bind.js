/**
 * bind example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

var bound1 = _.bind(greet, object, 'hi');
console.log(bound1('!'));
// => 'hi fred!'

// Bound with placeholders.
var bound2 = _.bind(greet, object, _, '!');
console.log(bound2('hi'));
// => 'hi fred!'