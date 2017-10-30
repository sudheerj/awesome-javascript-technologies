/**
 * forInRight example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forInRight(new Foo, function(value, key) {
    console.log(key);
});
// => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.