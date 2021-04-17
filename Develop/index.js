// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const README = (response) =>
`## Title 
    ${response.Title}
    <a id="Github" href="${response.Username}" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
        github email ${response.Email}
    License 
## Table of Contents 
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Licesne](#license)
    [Contributing](#contributing)
    [Test](#test)
    [Questions](#questions)

## Description 

${response.Description}

## Installation

${response.Dependencies}

## Usage

${response.Useage}

## License
![badge](https://img.shields.io/badge/license-${response.License}-brightgreen) 

${response.License}

## Contributing

${response.Project}

## Test 

${response.Test}

## Questions 

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
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "Dependencies"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "Test"
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
        // console.log (response)})
        var createReadMe = README(response)
        fs.writeFile("README.md", createReadMe, (err) =>
            err ? console.error(err) : console.log("ReadMe Created!!"))
    }).catch(err => console.log(err))

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
