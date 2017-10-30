/**
 * forEachRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.forEachRight([1, 2], function(value) {
    console.log(value);
});
// => Logs `2` then `1`.