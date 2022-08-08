const inquirer = require('inquirer');
const fs = require("fs");
const teamProfile = require('./src/generator');

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const teamArray = [];

const managerQuestions = [
    inquirer.prompt(
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is your team manager's employee ID?",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "What is your team manager's email address?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'managerNumber',
        },
    )
        .then((managerQuestions) => {
            const newManager = new Manager(managerQuestions)
            teamArray.push(newManager)
            selectTeam();
            console.log(manArray)
        })
        .catch((error) => {
            console.log(error)
        })
];

const selectTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "What license did you use?",
            name: 'license',
            choices: ['Engineer', 'Intern', 'Complete Team'],
        },
    ])
        .then(userChoice => {
            switch (userChoice.profile) {
                case 'Engineer':
                    engineerQuestions();
                    break;

                case 'Intern':
                    internQuestions();

                    break;
                default: generateChoice();
            }
        })
};

const engineerQuestions = [
    inquirer.prompt(
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is your engineer's employee ID?",
            name: 'engineerID',
        },
        {
            type: 'input',
            message: "What is your engineer's email address?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is your engineer's office number?",
            name: 'engineerNumber',
        },
    )
        .then((engineerQuestions) => {
            const newEngineer = new Engineer(engineerQuestions)
            teamArray.push(newEngineer)
            selectTeam();
            console.log(engineerArray)
        })
        .catch((error) => {
            console.log(error)
        })
];

const internQuestions = [
    inquirer.prompt(
        {
            type: 'input',
            message: "What is your Intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is your intern's employee ID?",
            name: 'internID',
        },
        {
            type: 'input',
            message: "What is your Intern's email address?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is your Intern's office number?",
            name: 'internNumber',
        },
    )
        .then((internQuestions) => {
            const newIntern = new Intern(internQuestions)
            teamArray.push(newIntern)
            selectTeam();
            console.log(internArray)
        })
        .catch((error) => {
            console.log(error)
        })
];

const generateChoice = () => {
    fs.writeFileSync('./dist/index.html', teamProfile(teamArray))
}

managerQuestions();

// Start Application
// Ask Questions from the Manager
// Then go to Menu
// Presented with options for Engineer, Intern... or finishing the team
// On click "Intern", ask questions about Intern
// On click "Engineer", ask questions about Engineer
// Generate an HTML
// {
//     type: 'list',
//     message: "What license did you use?",
//     name: 'license',
//     choices: ['MIT', 'Apache', 'BSD'],
//     validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
// },
// new TeamProfile().initializeTeamProfile();