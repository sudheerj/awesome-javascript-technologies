/**
 * Expand list examples
 */

'use strict';
var inquirer = require('../node_modules/inquirer');

inquirer.prompt([
    {
        type: 'expand',
        message: 'Conflict on `index.js`: ',
        name: 'overwrite',
        choices: [
            {
                key: 'y',
                name: 'Overwrite',
                value: 'overwrite'
            },
            {
                key: 'a',
                name: 'Overwrite this one and all next',
                value: 'overwrite_all'
            },
            {
                key: 'd',
                name: 'Show diff',
                value: 'diff'
            },
            {
                key: 'x',
                name: 'Abort',
                value: 'abort'
            }
        ]
    }
]).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});

