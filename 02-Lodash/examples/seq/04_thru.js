/**
 * thru example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_('  abc  ')
    .chain()
    .trim()
    .thru(function(value) {
        return [value];
    })
    .value());
// => ['abc']