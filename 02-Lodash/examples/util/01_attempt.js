/**
 * Attempt example
 */

'use strict';
var _ = require('../../node_modules/lodash');

// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function(selector) {
    return document.querySelectorAll(selector);
}, '>_>');

//console.log(elements);

if (_.isError(elements)) {
    elements = [];
}