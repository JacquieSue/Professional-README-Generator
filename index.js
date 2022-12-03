// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Here is the Table of Contents',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'If applicable, describe the steps required to install your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'List the project contributors',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.?',
      },
      {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email URL?',
      },
    ])
    .then((param) => {
      writeToFile(param);
    })
}
// // TODO: Create a function to write README file
function writeToFile(answers) {
  fs.writeFile('README.md', generateMarkdown(answers), (error) =>
    error ? console.log(error) : console.log('Successfully created README.md!'))
}
// Function call to initialize app
init();
