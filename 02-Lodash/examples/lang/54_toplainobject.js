/* toPlainObject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(_.assign({ 'a': 1 }, new Foo));
// => { 'a': 1, 'b': 2 }

console.log(_.assign({ 'a': 1 }, _.toPlainObject(new Foo)));
// => { 'a': 1, 'b': 2, 'c': 3 }