/**
 * functionsIn example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = _.constant('a');
    this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

console.log(_.functionsIn(new Foo));
// => ['a', 'b', 'c']