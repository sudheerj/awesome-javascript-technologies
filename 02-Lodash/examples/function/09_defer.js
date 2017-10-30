/**
 * defer example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.defer(function(text) {
    console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.