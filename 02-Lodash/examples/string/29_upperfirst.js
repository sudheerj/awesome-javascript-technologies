/**
 * UpperFirst example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.upperFirst('lodash'));
// => 'Lodash'

console.log(_.upperFirst('LODASH'));
// => 'LODASH'