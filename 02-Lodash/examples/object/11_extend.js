/**
 * assignIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar));
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }