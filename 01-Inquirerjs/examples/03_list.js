/**
 * List example
 */

'use strict';
var inquirer = require('../node_modules/inquirer');

var questions = [
    {
        type: 'list',
        name: 'product',
        message: 'Which Apple product you like more?',
        choices: ['iPhone8', 'AppleWatch', 'MacBookPro', 'iPhoneX', 'iPad', 'iPhone7'],
        filter: function (val) {
            return val.toLowerCase();
        }
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});
