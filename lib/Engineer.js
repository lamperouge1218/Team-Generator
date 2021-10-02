// Engineer employee + GitHub user name, getGithub, getRole(show Engineer)
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    
    getGithub() {
        return `GitHub Username: ${this.gitHub}`;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;