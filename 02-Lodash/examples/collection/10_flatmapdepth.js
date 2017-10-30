/**
 * flatMapDepth example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function duplicate(n) {
    return [[[n, n]]];
}

console.log(_.flatMapDepth([1, 2], duplicate, 2));
// => [[1, 1], [2, 2]]