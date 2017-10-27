/**
 * Truncate example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.truncate('Hello lodash fans there, lets enjoy JS'));
// => 'Hello lodash fans there, le...'

console.log(_.truncate('Hello lodash fans there, lets enjoy JS', {
    'length': 24,
    'separator': ' '
}));
// => 'Hello lodash fans...'

console.log(_.truncate('Hello lodash fans there, lets enjoy JS', {
    'length': 24,
    'separator': /,? +/
}));
// => 'Hello lodash fans...'

console.log(_.truncate('Hello lodash fans there, lets enjoy JS', {
    'omission': ' [...]'
}));
// => 'Hello lodash fans there, [...]'