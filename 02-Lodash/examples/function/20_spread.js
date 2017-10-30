/**
 * spread example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var say = _.spread(function(who, what) {
    return who + ' says ' + what;
});

console.log(say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([
    Promise.resolve(40),
    Promise.resolve(36)
]);

console.log(numbers.then(_.spread(function(x, y) {
    return x + y;
})));
// => a Promise of 76