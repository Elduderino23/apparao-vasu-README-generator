// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs") 

// TODO: Create an array of questions for user input
const questions = []
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function generateMarkdown(data){
   var badge = generateLicenseBadge(data)
    return `
${badge}
# ${data.Opening}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Question](#question)
## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Test
${data.Test}
## License
${data.License}
## Question
[Github Profile](https://github.com/${data.GitHub})

Email: ${data.Email}
`
}

function generateLicenseBadge(data){
    if (data.License === "Apache") {
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    }

    if (data.License === "Boost") {
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
    }

    if (data.License === "BSD 3-Clause License") {
        return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
    }

    if (data.License === "BSD 2-Clause License") {
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
    }

    if (data.License === "Creative Commons") {
        return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)"
    }

    if (data.License === "Eclipse Public License 1.0") {
        return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
    }

    if (data.License === "GNU") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }

    if (data.License === "Mozilla Public License 2.0") {
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
    }

    if (data.License === "The MIT License") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }

    if (data.License === "The Unlicense") {
        return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
    }
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
inquirer.prompt([{
    name: "Opening", 
    message: "what name do you want to give your project?",
    type: "input",

}, {
    name: "TableOfContents", 
    message: "Please press enter for Table of Contents",
    type: "input",

}, {
    name: "Description", 
    message: "Excellent, please input into Description section.",
    type: "input",

}, {
    name: "Installation", 
    message: "Excellent, please input into Installation.",
    type: "input",    

}, {
    name: "Usage", 
    message: "Excellent, please input into Usage section.",
    type: "input", 

}, {
    name: "Contributing", 
    message: "Excellent, please input into Contributing section.",
    type: "input",    


}, {
    name: "Test", 
    message: "Excellent, please input into Test section.",
    type: "input",

}, {
    name: "License", 
    message: "Excellent, please select a license from the list in License section.",
    type: "list",
    choices: ['none', 'Apache', 'Boost', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Creative Commons', 'Eclipse Public License 1.0', 'GNU', 'Mozilla Public License 2.0', 'The MIT License', 'The Unlicense']

}, {
    name: "GitHub", 
    message: "Excellent, please input your Github username in Question section.",
    type: "input",

}, {
    name: "Email", 
    message: "Excellent, please input your email address into Question section.",
    type: "input",
}, {

    name: "Final", 
    message: "Excellent, would you kindly press enter and wait for the README to be generated?",
    type: "input",

}]).then(function(data){
    var markDown = generateMarkdown(data)
    writeToFile("INPUT.md", markDown);
    
})
