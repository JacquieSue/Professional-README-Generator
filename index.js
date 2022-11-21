// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

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
    message: 'What is your email URL?',
  },
  {
    type: 'input',
    name: 'titile',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.',
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
    message: 'I applicable, provide guidelines on how other developers can contribute to your project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If applicable, provide any tests written for your application and provide examples on how to run them.?',
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Here is the Table of Contents', 
  // - [Installation](#installation)
  // - [Usage](#usage)
  // - [Credits](#credits)
  // - [License](#license)
  // - [Description](#description)
  // - [Tests](#tests)
  // - [Questions](#questions)
  // - [Contact - me](#contact - me)]
  },
{
  type: 'input',
    name: 'email',
      message: 'What is your email URL?',  
  },
{
  type: 'input',
    name: 'email',
      message: 'What is your email URL?',  
  },
])

// TODO: Create a function to initialize app
// init()
// questions()
  .then((answers) => {
    const READMEContent = generateMarkdown;// writeFile('README.md', generateMarkdown({ ...answers })))
  });
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  fs.writeFile('README.md', READMEContent, (error) => 
    error ? console.log(error) : console.log('Successfully created README.md!')
  )
  
  

// Function call to initialize app
// init();
