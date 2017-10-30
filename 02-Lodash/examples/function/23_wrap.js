/**
 * wrap example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var p = _.wrap(_.escape, function(func, text) {
    return '<p>' + func(text) + '</p>';
});

console.log(p('fred, barney, & pebbles'));
// => '<p>fred, barney, &amp; pebbles</p>'