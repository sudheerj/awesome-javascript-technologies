/**
 * reduceRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [[0, 1], [2, 3], [4, 5]];

console.log(_.reduceRight(array, function(flattened, other) {
    return flattened.concat(other);
}, []));
// => [4, 5, 2, 3, 0, 1]