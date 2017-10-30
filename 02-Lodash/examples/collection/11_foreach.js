/**
 * forEach example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.forEach([1, 2], function(value) {
    console.log(value);
});
// => Logs `1` then `2`.

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).