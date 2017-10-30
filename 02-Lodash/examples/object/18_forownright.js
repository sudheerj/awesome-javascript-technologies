/**
 * forOwnRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forOwnRight(new Foo, function(value, key) {
    console.log(key);
});
// => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.