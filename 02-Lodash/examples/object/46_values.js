/**
 * values example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.values(new Foo));
// => [1, 2] (iteration order is not guaranteed)

console.log(_.values('hi'));
// => ['h', 'i']