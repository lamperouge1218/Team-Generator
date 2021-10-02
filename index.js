const inquirer = require('inquirer');
const fs = require('fs');

// Employee must have Name , ID, email, getName(), getID, getEmail(), getRole(returns employee)

// Manager, inlcuded employee + office number override getRole(show manager)

// Engineer employee + GitHub user name, getGithub, getRole(show Engineer)

// Intern emplee + school getSchool(), getRole(Intern)

// add validation to each prompt to ensure proper user input

// each Employee created will become a card. 

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }
    getID() {
        console.log(`ID: ${this.ID}`);
    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getRole() {
        return "Employee";
    }
}