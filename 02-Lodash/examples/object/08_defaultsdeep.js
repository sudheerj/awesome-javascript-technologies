/**
 * defaultsDeep example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));
// => { 'a': { 'b': 2, 'c': 3 } }