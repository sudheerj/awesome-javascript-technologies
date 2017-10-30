/**
 * rest example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var say = _.rest(function(what, names) {
    return what + ' ' + _.initial(names).join(', ') +
        (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});

console.log(say('hello', 'fred', 'barney', 'pebbles'));
// => 'hello fred, barney, & pebbles'