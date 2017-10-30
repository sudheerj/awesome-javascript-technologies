/**
 * mixin example
 */

'use strict';
var _ = require('../../node_modules/lodash');


function vowels(string) {
    return _.filter(string, function(v) {
        return /[aeiou]/i.test(v);
    });
}

_.mixin({ 'vowels': vowels });
console.log(_.vowels('fred'));
// => ['e']

_('fred').vowels().value();
// => ['e']

_.mixin({ 'vowels': vowels }, { 'chain': false });
console.log(_('fred').vowels());
// => ['e']