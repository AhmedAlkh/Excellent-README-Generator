const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project'
        },
        {
           type: 'input',
           name: 'installation',
           message: 'Enter the installation instructions' 
        },
        {
           type: 'input',
           name: 'usage',
           message: 'Enter the instruction for use'
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select all licenses that apply",
            choices: ['GNU', 'Mozilla', 'Apache', 'MIT', 'Boost', 'None']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter contibutors for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What testing has been done for your project?'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ]);
};

// TODO: Create a function to write README file
questions().then((answers) => {
    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
      if (err) throw err;
    });
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
