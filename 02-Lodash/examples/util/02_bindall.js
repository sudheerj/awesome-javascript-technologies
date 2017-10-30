/**
 * Attempt example
 */

'use strict';
var _ = require('../../node_modules/lodash');
var jQuery = require('../../node_modules/jQuery');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var view = {
    'label': 'docs',
    'click': function() {
        console.log('clicked ' + this.label);
    }
};

const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

var element = dom.window.document.body.children[0];

_.bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.