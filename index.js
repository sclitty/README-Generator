const fs = require("fs");
const inquirer = require("inquirer");

function generateReadMe () {

    inquirer.prompt([
        // USER QUESTIONS ARRAY
        {
            type: "input",
            message: "What is the name of the project you're working on?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Write an introduction to your project",
            name: "projectIntro"
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "projectInstall"
        },
        {
            type: "input",
            message: "How do you use your project?",
            name: "projectUsage"
        },
        {
            type: "list",
            message: "Select a License",
            choices: 
                    [
                        "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                        "MPL 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
                        "BY [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
                        "Need to grab one, still..."
                    ],
            name: "projectLic"
        },
        {
            type: "input",
            message: "Who else contributed to this project? :",
            name: "projectCon"
        },
        {
            type: "input",
            message: "Explain any testing you may have had while making this project, if any at this point :",
            name: "projectTest"
        },
        {
            type: "input",
            message: "What is your preferred Email for user/contributor questions? :",
            name: "projectQuestion1"
        },
        {
            type: "input",
            message: "Link to you GitHub profile :",
            name: "projectQuestion2"
        },
        {
            type: "input",
            message: "Any additional information you would like the users to know about contacting you:",
            name: "projectQuestion3"
        },

    ]).then(function(response) {
        // TEMPLATE
        const readMeTemplate =
`# ${response.projectName}

## Contents 

1. [ Introduction ](#intro)
2. [ Installation ](#install)
3. [ Usage ](#usage)
4. [ License ](#license)
5. [ Contributors ](#contributing)
6. [ Tests ](#tests)
7. [ Questions ](#questions)

<br>

<a name="intro"></a>
## 1. Introduction

${response.projectIntro}

<a name="install"></a>
### 2. Installation

${response.projectInstall}

<a name="usage"></a>
### 3. Usage

${response.projectUsage}

<a name="license"></a>
### 4. Licence

${response.projectLic}

<a name="contributing"></a>
### 5. Contributors

${response.projectCon}

<a name="tests"></a>
### 6. Tests

${response.projectTest}

<a name="questions"></a>
### 7. Contact Information

Email: ${response.projectQuestion1}

GitHub: ${response.projectQuestion2}

${response.projectQuestion3}`

        // CREATE FILE NAME VARIABLE, REMOVES SPACES AND CONVERTS TO LOWERCASE
        const fileName = `${response.projectName.replace(/\s/g, '').toLowerCase()}.md`;

        fs.writeFile(fileName, readMeTemplate, function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success!");
        });
    
    });
};

generateReadMe ();
