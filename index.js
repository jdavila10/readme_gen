const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your repository?"
        },
        {
            type: "input",
            name: "description",
            message: "Where are you from?"
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "What is your favorite hobby?"
        },
        {
            type: "input",
            name: "installation",
            message: "What is your favorite food?"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "license",
            message: "Enter your LinkedIn URL."
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter your LinkedIn URL."
        },
        {
            type: "input",
            name: "test",
            message: "Enter your LinkedIn URL."
        }
    ]);
}

function generateHTML(answers) {
    return `

  * Title 
  ${answers.title}
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
`;
}

promptUser()
    .then(function (answers) {
        const md = generateHTML(answers);

        return writeFileAsync("README.md", md);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });