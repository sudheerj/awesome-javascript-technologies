/**
 * rearg example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var rearged = _.rearg(function(a, b, c) {
    return [a, b, c];
}, [2, 0, 1]);

console.log(rearged('b', 'c', 'a'));
// => ['a', 'b', 'c']