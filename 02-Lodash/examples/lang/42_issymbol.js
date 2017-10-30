/* isSymbol example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.isSymbol(Symbol.iterator));
// => true

console.log(_.isSymbol('abc'));
// => false