/**
 * forOwn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
    console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).