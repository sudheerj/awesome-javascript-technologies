/**
 * before example
 */

'use strict';
var _ = require('../../node_modules/lodash');

jQuery(element).on('click', _.before(5, addContactToList));
// => Allows adding up to 4 contacts to the list.