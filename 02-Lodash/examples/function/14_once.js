/**
 * once example
 */

'use strict';
var _ = require('../../node_modules/lodash');

function createApplication() {
    console.log("createApplication");
}

var initialize = _.once(createApplication);
initialize();
initialize();
// => `createApplication` is invoked once