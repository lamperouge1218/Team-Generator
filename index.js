const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require("./src/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// add validation to each prompt to ensure proper user input

// each Employee created will become a card. 

const teamMemberArray = [];

const employeePrompt = [
    {
        type: "list",
        message: "Select the Role of new Team Member",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    },

    {
        type: "input",
        message: "Enter Team Member name",
        name: "name",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter Team Member name");
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Enter Team Member ID",
        name: "id",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter Team Member ID number");
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Enter Team Member email address",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter Team Member email address");
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Enter team Manager office number",
        name: "officeNumber",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter team Manager office number");
            }
            return true;
        },
        when: (answer) => answer.role === "Manager",
    },

    {
        type: "input",
        message: "Enter GitHub username of new Engineer",
        name: "gitHub",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter GitHub username of new Engineer");
            }
            return true;
        },
        when: (answer) => answer.role === "Engineer",
    },

    {
        type: "input",
        message: "Enter School name of Intern",
        name: "school",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter School name of Intern");
            }
            return true;
        },
        when: (answer) => answer.role === "Intern",
    },

    {
        type: "confirm",
        message: "Would you like to add more team members?",
        name: "confirmAddEmployee",
        default: false,
    },
]

const addEmployee = () => {
    return inquirer
        .prompt(employeePrompt)
        .then(employeeInfo => {
            let { role, name, id, email, officeNumber, gitHub, school, confirmAddEmployee } = employeeInfo;
            let employee;
            switch (role) {
                case "Manager":
                    employee = new Manager(name, id, email, officeNumber);
                    console.log(employee);
                    break;
                case "Engineer":
                    employee = new Engineer(name, id, email, gitHub);
                    console.log(employee);
                    break;

                case "Intern":
                    employee = new Intern(name, id, email, school);
                    console.log(employee);
                    break;

                default:
                    break;
            }

            teamMemberArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee();
            } else {
                return console.log(teamMemberArray);
            }
        })
}


addEmployee();
