/**
 * Words example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.words('hi, lodash, & devs'));
// => ['hi', 'lodash', 'devs']

console.log(_.words('hi, lodash, & devs', /[^, ]+/g));
// => ['hi', 'lodash', '&', 'devs']