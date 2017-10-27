/**
 * Template example
 */

'use strict';
var _ = require('../../node_modules/lodash');


// Use the "interpolate" delimiter to create a compiled template.
var compiled = _.template('hello <%= js %>!');
console.log(compiled({ 'js': 'lodash' }));
// => 'hello lodash!'

// Use the internal `print` function in "evaluate" delimiters.

var compiled = _.template('<% print("hello " + js); %>!');
console.log(compiled({ 'js': 'lodash' }));
// => 'hello lodash!'