/**
 * keys example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.keys(new Foo));
// => ['a', 'b'] (iteration order is not guaranteed)

console.log(_.keys('hi'));
// => ['0', '1']