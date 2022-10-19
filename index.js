// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// const fs = require("fs") 
// const pathfinder = require("path") 
// fs.writeFile(pathfinder.join("C:\Users\xfile\bootcamp\README generator\apparao-vasu-README-generator\", userReadmeName+".md"), "Testresult", (event)=>{console.log("ERROR")})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
inquirer.prompt([{
    name: "q1confirm",
    message: "Do you want a README.md like a professional?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, what name do you want to give your project?",
    type: "input",

}]).then(function(data){
    console.log(data)
})
