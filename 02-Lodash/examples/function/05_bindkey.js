/**
 * bindKey example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};

var bound1 = _.bindKey(object, 'greet', 'hi');
console.log(bound1('!'));
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
    return greeting + 'ya ' + this.user + punctuation;
};

console.log(bound1('!'));
// => 'hiya fred!'

// Bound with placeholders.
var bound2 = _.bindKey(object, 'greet', _, '!');
console.log(bound2('hi'));
// => 'hiya fred!'