/**
 * delay example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.delay(function(text) {
    console.log(text);
}, 1000, 'later');
// => Logs 'later' after one second.