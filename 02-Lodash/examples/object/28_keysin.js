/**
 * keysIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.keysIn(new Foo));
// => ['a', 'b', 'c'] (iteration order is not guaranteed)