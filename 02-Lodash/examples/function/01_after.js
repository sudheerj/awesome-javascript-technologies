/**
 * after example
 */

'use strict';
var _ = require('../../node_modules/lodash');

var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
    console.log('done saving!');
});

console.log(_.forEach(saves, function(type) {
    asyncSave({ 'type': type, 'complete': done });
}));
// => Logs 'done saving!' after the two async saves have completed.
