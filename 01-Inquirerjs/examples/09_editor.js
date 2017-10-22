/**
 * Editor example
 */

'use strict';
var inquirer = require('../node_modules/inquirer');

var questions = [
    {
        type: 'editor',
        name: 'biography',
        message: 'Please write a short biography of at least 3 lines.',
        validate: function (text) {
            if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
            }

            return true;
        }
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});