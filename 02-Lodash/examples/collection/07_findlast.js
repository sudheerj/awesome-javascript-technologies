/**
 * findLast example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.findLast([1, 2, 3, 4], function(n) {
    return n % 2 == 1;
}));
// => 3