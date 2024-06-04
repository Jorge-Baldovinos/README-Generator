// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
},
{
    type: "input",
    message: "How would you describe your project?",
    name: "description",
},
{
    type: "list",
    name: "tableOfContents",
    message: "Would you like to include a table of contents?",
    choices: ["no","yes"],
},
{
    type: "list",
    name: "installation",
    message: "Are there any installation instructions?",
    choices: ["no", "yes"],
},
{
    type: "input",
    message: "How do you use your application?",
    name: "usage",
},
{
    type: "input",
    message: "List any one you would like to give credit to.",
    name: "credits",
},
{
    type: "list",
    name: "license",
    message: "Choose the license you used?",
    choices: [ "None", "MIT License", "Apache License 2.0", "GNU General Public License v3.0", 'BSD 2-Clause \"Simplified"\ License', 
    'BSD 3-Clause \"New"\ or \"Revised"\ License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", 
    "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", 
    "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
},
{
    type: "list",
    name: "badges",
    message: "Would you like to include a badge?",
    choices: ["no", "yes"],
},
{
    type: "input",
    message: "List the features included in your application",
    name: "features",
},
{
    type: "list",
    name: "contributors",
    message: "Would you like others to contribute?",
    choices: ["no", "yes"],
},
{
    type: "list",
    name: "tests",
    message: "would you like to include guidelines to test your application?",
    choices: ["no", "yes"],
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, 
       (err) => err ? console.log(colors.bgBrightRed(err))
       : console.log(colors.bgBrightGreen("success!")) 
    );
}

// TODO: Create a function to initialize app 
function init() {
inquirer
    .prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
    };
    // Function call to initialize app
init();
