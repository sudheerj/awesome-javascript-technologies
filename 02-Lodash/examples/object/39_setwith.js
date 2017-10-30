/**
 * setWith example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var object = {};

console.log(_.setWith(object, '[0][1]', 'a', Object));
// => { '0': { '1': 'a' } }