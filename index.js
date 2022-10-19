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
    name: "starter",
    message: "Do you want a README.md like a professional?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, what name do you want to give your project?",
    type: "input",

}, {
    name: "response", 
    message: "Excellent, do you want a Table of Contents?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, do you want a Description?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please input into Description section.",
    type: "input",

}, {
    name: "response", 
    message: "Excellent, do you want a Installation section?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please input into Installation.",
    type: "input",    

}, {
    name: "response", 
    message: "Excellent, do you want a Usage section?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please input into Usage.",
    type: "input", 
    
}, {
    name: "response", 
    message: "Excellent, do you want a Contributing section?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please input into Contributing.",
    type: "input",    

}, {
    name: "response", 
    message: "Excellent, do you want a Test section?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please input into Test.",
    type: "input",

}, {
    name: "response", 
    message: "Excellent, do you want a License section?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, please select a license from the list?",
    type: "list",
    choice: ['none', 'Apache', 'Boost', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Creative Commons', 'Eclipse Public License 2.0', 'GNU', 'Mozilla Public License 2.0', 'The MIT License', 'The Unlicense']

}, {
    name: "response", 
    message: "Excellent, are you sure with your selection of license?",
    type: "confirm",

}, {
    name: "response", 
    message: "Excellent, do you want a Question section?",
    type: "confirm",    

}, {
    name: "response", 
    message: "Excellent, please input your Github username with a link to your Github profile and your email",
    type: "input",

}, {
    name: "response", 
    message: "Excellent, are you satisfied with your README choices?",
    type: "confirm",    

}, {
    name: "response", 
    message: "Excellent, would you kindly wait for your README to generate? I promise you will not be disappointed.",

}]).then(function(data){
    console.log(data)
})
