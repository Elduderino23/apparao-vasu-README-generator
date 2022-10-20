// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs") 
// const pathfinder = require("path") 
// fs.writeFile(pathfinder.join("C:\Users\xfile\bootcamp\README generator\apparao-vasu-README-generator\", userReadmeName+".md"), "Testresult", (event)=>{console.log("ERROR")})
// TODO: Create an array of questions for user input
const questions = ["Do you want a README.md like a professional", "what name do you want to give your project?", "do you want a Table of Contents?", "do you want a Description section?", "do you want a Installation section?", "do you want a Usage section?", "do you want a Contributing section?", "Excellent, do you want a Test section?", "do you want a License section?", "are you sure with your selection of license?", "Excellent, do you want a Question section?", "are you satisfied with your README choices?", "would you kindly wait for your README to generate?" ];
var license = ["none","[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function generateMarkdown(data){
    return `
    ${generateLicenseBadge(data)}
# ${data.Opening}
## Table of Contents
${data.TableOfContents}
## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Test
${data.Test}
## License
${data.License}
## Question
${data.Question}
`
}

function generateLicenseBadge(data){
    if (data.license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0"
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
inquirer.prompt([{
    name: "Opening", 
    message: "Excellent, what name do you want to give your project?",
    type: "input",

}, {
    name: "TableOfContents", 
    message: "Please enter Table of Contents",
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
    message: "Excellent, please select a license from the list in License section?",
    type: "list",
    choices: ['none', 'Apache', 'Boost', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Creative Commons', 'Eclipse Public License 1.0', 'GNU', 'Mozilla Public License 2.0', 'The MIT License', 'The Unlicense']

}, {
    name: "Question", 
    message: "Excellent, please input your Github username with a link to your Github profile and your email in Question section.",
    type: "input",

}]).then(function(data){
    var markDown = generateMarkdown(data)
    writeToFile("INPUT.md", markDown);
    // console.log(data)
})
