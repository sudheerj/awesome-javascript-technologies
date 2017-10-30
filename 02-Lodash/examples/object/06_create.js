/**
 * create example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function Shape() {
    this.x = 0;
    this.y = 0;
}

function Circle() {
    Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
});

var circle = new Circle;
console.log(circle instanceof Circle);
// => true

console.log(circle instanceof Shape);
// => true