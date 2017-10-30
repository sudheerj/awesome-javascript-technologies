/**
 * runInContext example
 */

'use strict';
var _ = require('../../node_modules/lodash');

_.mixin({ 'foo': _.constant('foo') });

var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });

console.log(_.isFunction(_.foo));
// => true
console.log(_.isFunction(_.bar));
// => false

console.log(lodash.isFunction(lodash.foo));
// => false
console.log(lodash.isFunction(lodash.bar));
// => true

// Create a suped-up `defer` in Node.js.
var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;