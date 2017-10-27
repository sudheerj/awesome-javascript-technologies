/**
 * Unescape example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.unescape('Hello, lodash, &amp; devs'));
// => 'Hello, lodash, & devs'