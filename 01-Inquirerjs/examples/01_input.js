/**
 * Input prompt example
 */

'use strict';
var inquirer = require('../node_modules/inquirer');

var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What\'s your name'
    },
    {
        type: 'input',
        name: 'language',
        message: 'What\'s your mother tongue',
        default: function () {
            return 'English';
        }
    },
    {
        type: 'input',
        name: 'age',
        message: 'What\'s your age',
        validate: function (value) {
            var age = value.match(/^[1-9][0-9]?$|^100$/i);
            if (age) {
                return true;
            }

            return 'Please enter a valid age';
        }
    },

    {
        type: 'input',
        name: 'phone',
        message: 'What\'s your phone number',
        validate: function (value) {
            var pass = value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
            if (pass) {
                return true;
            }

            return 'Please enter a valid phone number';
        }
    }
];

inquirer.prompt(questions).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});
