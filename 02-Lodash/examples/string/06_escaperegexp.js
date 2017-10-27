/**
 * EscapeRegExp example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.escapeRegExp('[sudheerjonna](https://sudheerjonna.com/)'));
// => '\[sudheerjonna\]\(https://sudheerjonna\.com/\)'