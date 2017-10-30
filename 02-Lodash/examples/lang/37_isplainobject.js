/* isPlainObject example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Foo() {
    this.a = 1;
}

console.log(_.isPlainObject(new Foo));
// => false

console.log(_.isPlainObject([1, 2, 3]));
// => false

console.log(_.isPlainObject({ 'x': 0, 'y': 0 }));
// => true

console.log(_.isPlainObject(Object.create(null)));
// => true