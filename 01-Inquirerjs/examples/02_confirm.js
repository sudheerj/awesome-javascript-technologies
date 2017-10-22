/**
 * Confirm example
 */

'use strict';
var inquirer = require('../node_modules/inquirer');

var questions = [
    {
        type: 'confirm',
        name: 'toBeLiked',
        message: 'Do you like InquirerJS?',
        default: true
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});
