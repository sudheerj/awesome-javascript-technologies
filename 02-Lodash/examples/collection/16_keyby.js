/**
 * keyBy example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

console.log(_.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
}));
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

console.log(_.keyBy(array, 'dir'));
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }