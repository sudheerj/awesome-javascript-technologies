/**
 * Escape example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.escape('Apples,Oranges, & Mangoes'));
// => 'Apples,Oranges, &amp; Mangoes'