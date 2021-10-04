const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// add validation to each prompt to ensure proper user input

// each Employee created will become a card. 

const employeePrompt = [
    {
        type: "list",
        message: "Select the Role of new Team Member",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    },

    
]
