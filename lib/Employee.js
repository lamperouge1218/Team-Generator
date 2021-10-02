// Parent constructor class for Employee
class Employee {
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