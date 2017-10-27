
/**
 * Now example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.defer(function(stamp) {
    console.log(_.now() - stamp);
}, _.now());
// => Logs the number of milliseconds it took for the deferred invocation.