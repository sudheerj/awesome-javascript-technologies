/**
 * isElement example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isElement(document.body));
// => true

console.log(_.isElement('<body>'));
// => false