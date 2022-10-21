# README Generator

## Video Link

https://watch.screencastify.com/v/yWZs1QtDcZFrxVbZeixR

## Goal
The task was use Node.js and Inquirer.js to create a README Generator that produce a README.md in full markdown, have clickable sections in Table of Contents that would direct the user to go to each section of the README, generate a license badge on the top part of the markdown based on selection of license the user selects, a series of prompts the user would answer based on input, a link to a GitHub profile based on the user's input of a Github profile, an inputting email into the generated README.md, and the generated README to update itself when a new input is put in. 

## Technology Use
  - Node.js
  - Inquirer.js
  - JQuery
  - VS Code
  - Git Bash 
  - GitHub

## Execution
The first part of making the README generator was to make the questions. I was relatively easy because the documentation behind Inquirer.js provided several prompt templates to use the README generator. It broke down into three catagories: name, message, and type. Message allows any question to pop up, name acts similar to ids in HTML formats, and type for what kind of response does the user encounter. For example, if the developer wants the user to make a yes or no response, there is type: confirm.
If the developer wants the user to input any words there is type: input.

The type: input used to generate questions is  the prompt shown below:

```Javascript
{

}, {
    name: "Description", 
    message: "Excellent, please input into Description section.",
    type: "input",
}
```
When the user encounters the question, what ever they type into the input field will be generated. It is the same for the other ten questions. The prompts were only possible with a function called "function init()". 

The second part of was to make the generation of a new file possible. Luckily the Inquirer.js documentation showed that in order to make it happen is use the module require for file system, fs for short.

The set up is shown below:

```Javascript
const inquirer = require('inquirer')
const fs = require("fs") 

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}
```
The require module summons both fs and inquirer in their respective spots and that helps Node.js create a file in the first place. The function writeToFile pulls the data from the user generation inputs as well to start the file creation. The real meat and potatoes starts with both functions generalMarkdown and generateLicenseBadge.

Both functions are shown below:

```Javascript
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

 ```
generateMarkdown functions helps sets up the markdown necessary to be put inside the hollow markdown file, called INPUT.md. User generated magic starts with ${data.(name)}. Replace name with the sections like Installation or Usage, whatever the user puts in each of their respective sections. The other function, generateLicense, allows the creation of a license badge based on the user's selection of license badges to show up on the top part of the generated README. For example, if the user chooses the MIT license, then the MIT License badge will generate on top of the INPUT.md, the shell markdown file that generates markdown based on user input. There is on last piece of the puzzle for this code and that is the then statement that ties generateMarkdown to writeToFile. Without this section, there would be nothing to generate no matter how many times the user types "node index.js"

the part is shown below:

```Javascript
}]).then(function(data){
    var markDown = generateMarkdown(data)
    writeToFile("INPUT.md", markDown);
    // console.log(data)
})
```
## Result

The following application demonstrates what the final product looks like:
The application in the terminal
![](2022-10-20-22-15-08.png)
the markdown
![](2022-10-20-22-15-45.png)
the final look
![](2022-10-20-22-16-49.png)
