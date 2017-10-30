/**
 * uniqueId example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.uniqueId('contact_'));
// => 'contact_104'

console.log(_.uniqueId());
// => '105'