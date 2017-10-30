/**
 * flip example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var flipped = _.flip(function() {
    return _.toArray(arguments);
});

console.log(flipped('a', 'b', 'c', 'd'));
// => ['d', 'c', 'b', 'a']