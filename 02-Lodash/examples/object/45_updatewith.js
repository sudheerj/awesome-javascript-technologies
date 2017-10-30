/**
 * updateWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = {};

console.log(_.updateWith(object, '[0][1]', _.constant('a'), Object));
// => { '0': { '1': 'a' } }