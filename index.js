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
            type: "input",
            message: "Would you like to display a licence? Enter how you would when making a standard markdown file.",
            name: "projectLic"
        },
        {
            type: "input",
            message: "Who else contributed to this project?",
            name: "projectCon"
        },
        {
            type: "input",
            message: "Explain any testing you may have had while making this project",
            name: "projectTest"
        },
        {
            type: "input",
            message: "Add any questions for users or other contributors",
            name: "projectQuestion"
        }


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
            ### 7. Questions

            ${response.projectQuestion}`

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

// TODO: create an array of questions 

// TODO: function that will generate my readme template 

// TODO: use inquirer to prompt users with questions 

// TODO: with that object of user answers from inquirer - pass those into my generate readme function 

// TODO: writeFile using template generated README function 