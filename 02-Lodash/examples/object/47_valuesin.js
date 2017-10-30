/**
 * valuesIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.valuesIn(new Foo));
// => [1, 2, 3] (iteration order is not guaranteed)