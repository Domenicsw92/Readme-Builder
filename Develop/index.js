// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const README = (response) =>
`# Title: ${response.Title} 
Visit the deployed site!
GitHub Deployed Site: ${response.Site}

License [![badge:${response.License}](https://img.shields.io/badge/license-${response.License}-brightgreen)](https://opensource.org/licenses/${response.License})
## Table of Contents 
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Test](#test)
   * [Questions](#questions)

## Description 

${response.Description}

## Installation

    ${response.Dependencies}

## Usage
How to use 
${response.Usage}

## License
[![badge:${response.License}](https://img.shields.io/badge/license-${response.License}-brightgreen)](https://opensource.org/licenses/${response.License})

This Application is covered by ${response.License} license.

## Contributing

${response.Project}

## Test 
Run the following test: 

    ${response.Test}

## Questions 
Questions about the applications contact me through:

GitHub Username: https://github.com/${response.Username}

Email: ${response.Email}

${response.Questions}  `

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your GitHub Email?",
        name: "Email"
    },
    {
        type: "input",
        message: "What is the GitHub deployed site?",
        name: "Site"
    },
    {
        type: "input",
        message: "What is your Project Name?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please wrtie a short description of your project.",
        name: "Description"
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "License",
        choices: [
            "MIT",
            "APACHE2.0",
            "GPL3.0",
            "BSD3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "Dependencies",
        default: " npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "Test",
        default: " npm run test",
    },
    {
        type: "input",
        message: "Please provide user with the instructions on usage of the application.",
        name: "Usage"
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "Project"
    },
    {
        type: "input",
        message: "What questions does the user have about the project?",
        name: "Questions"
    }
])
    .then((response) => {
        var createReadMe = README(response)
        fs.writeFile("GenREADME.md", createReadMe, (err) =>
            err ? console.error(err) : console.log("ReadMe Created!!"))
    }).catch(err => console.log(err))
