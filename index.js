const inquirer = require('inquirer');
const fs = require('fs');

inquirer
   .prompt([
    {
        type: 'input',
        message: 'Project Name?',
        name: 'project',
    },{
        type: 'checkbox',
        message: 'What is the charge you\'re into?',
        name: 'charge',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Manager', 
    },{
        type: 'checkbox',
        message: 'ID',
        choices: [1,2,3,4,5],
        default: 1,
    },{

    }
   ])