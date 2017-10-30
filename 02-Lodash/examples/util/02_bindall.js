/**
 * Attempt example
 */

'use strict';
var _ = require('../../node_modules/lodash');
var jQuery = require('../../node_modules/jQuery');

var view = {
    'label': 'docs',
    'click': function() {
        console.log('clicked ' + this.label);
    }
};

//var element = document.createElement("<div>");

_.bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.