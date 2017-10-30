/**
 * cond example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var func = _.cond([
    [_.matches({ 'a': 1 }),           _.constant('matches A')],
    [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
    [_.stubTrue,                      _.constant('no match')]
]);

console.log(func({ 'a': 1, 'b': 2 }));
// => 'matches A'

console.log(func({ 'a': 0, 'b': 1 }));
// => 'matches B'

console.log(func({ 'a': '1', 'b': '2' }));
// => 'no match'

