// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
 
const generateREADME = ({ Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions, email, GitHub }) =>
// TODO: Create an array of questions for user input
// const questions = [:My Git];
inquirer
.prompt([
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email URL.',
      },
])
.then((answers) => {
const htmlPageContent = generateREADME(answers);
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile('README.md', htmlPageContent, (error) =>
error ? console.log(error) : console.log('Successfully created README.md!')
)})
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
