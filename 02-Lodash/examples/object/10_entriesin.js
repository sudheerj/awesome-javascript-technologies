/**
 * toPairsIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');


function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.toPairsIn(new Foo));
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)