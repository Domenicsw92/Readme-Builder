// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const README = (response) =>
    ` ## Title
        github license 
    License 
    ## Table of Contents 
    ## Description
    ## Installation
    ## Usage
    ## License 
    ## Contributing
    ## Test
    ## Questions `

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
        name: "test"
    },
    {
        type: "input",
        message: "Please provide user with the instructions on usage of the application.",
        name: "usage"
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "project"
    }
])
.then((response) => {
    // console.log (response)})
    var createReadMe = html(response)
    fs.writeFile("README.md", createReadMe, (err) =>
    err? console.error(err): console.log("ReadMe Created!!"))
}).catch(err => console.log(err))

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
