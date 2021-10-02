const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should have all parameters match and be called properly", () => {
        const newEmp = new Employee("Paul Scraighm", 5643, "test@test.test");
        expect(newEmp.name).toEqual("Paul Scraighm");
        expect(newEmp.id).toEqual(5643);
        expect(newEmp.email).toEqual("test@test.test");
        
    })

    describe("getName", () => {
        it("should provide the name of Employee", () => {
            const newEmp = new Employee("Paul Scraighm", 5643, "test@test.test");
            expect(newEmp.getName()).toEqual("Name: Paul Scraighm");
        })
    })

    describe("getID", () => {
        it("should provide the ID of Employee", () => {
            const newEmp = new Employee("Paul Scraighm", 5643, "test@test.test");
            expect(newEmp.getID()).toEqual(`ID: ${5643}`);
        })
    })

    describe("getEmail", () => {
        it("should provide the email of Employee", () => {
            const newEmp = new Employee("Paul Scraighm", 5643, "test@test.test");
            expect(newEmp.getEmail()).toEqual("Email: test@test.test");
        })
    })
})