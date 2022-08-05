const inquirer = require('inquirer');
const fs = require("fs");
const TeamProfile = require('./src/generator');

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const manArray = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'managerName',
        // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: 'managerID',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "What is your team manager's email address?",
        name: 'managerEmail',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: 'managerNumber',
        validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
    },
];

console.log(managerQuestions)

function runManager() {
    return inquirer.prompt(managerQuestions)
        .then((data) => {
            const newManager = new Manager(data)
            manArray.push(newManager)
            console.log(manArray)
        })
        .catch((error) => {
            console.log(error)
        })
}

runManager();


// Start Application
// Ask Questions from the Manager
// Then go to Menu
// Presented with options for Engineer, Intern... or finishing the team
// On click "Intern", ask questions about Intern
// On click "Engineer", ask questions about Engineer
// Generate an HTML


const prompt = {

}


// {
//     type: 'list',
//     message: "What license did you use?",
//     name: 'license',
//     choices: ['MIT', 'Apache', 'BSD'],
//     validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
// },







new TeamProfile().initializeTeamProfile();