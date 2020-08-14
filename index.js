
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
//This function creates an array of questions for the user 
function promptUser() {
  return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (This will be the header of the README)"
        },
        {
            type: 'input',
            name: 'image',
            message: 'Add the file path to an image for your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of this project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How does a user install your application? Please provide instructions here'
        },
        {
            type:  'list',
            name: 'license',
            message: 'Which license will you be using for your project?',
            choices: [
                'MIT',
                'GNU GPLv3',
                'Apache',
                'Mozilla'
            ]
        },
        { 
            type: 'input',
            name: 'contributors',
            message: 'Who contributed in this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide some instructions for the test'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your Github username?'
        },

    ]);
};
function genReadMe(answers) {
    return `

  # ${answers.title}

  ---


  ![](${answers.image})

  ---


  ## Table of Contents

  - [Image](#image)
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Contact](#contact)

  ---  
  

  ## Description

  ${answers.description}

  ---
  

  ## Installation

  ## ${answers.installation}

  ---


  ## License

  ${answers.license}


  ---


  ## Contributors

  ${answers.contributors}


  ---


  ## Test

  ${answers.test}

  ---
    
  
  ## Contact:

  For questions about my README generator please go to my Github page following this link: 
  - [Github Profile](https://github.com/${answers.contact})
  
    `;
}

async function init() {
    console.log('hello');

    try {
        const answers = await promptUser();

        const readMe = genReadMe(answers);

        await writeFile("README.md", readMe);

        console.log("Successfully created a README file");
    } catch (err) {
        console.log(err);
    }
}

init();





