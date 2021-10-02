const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should have all parameters match and be called properly", () => {
        const newMan = new Manager("Paul Scraighm", 5643, "test@test.test", "A02496");
        expect(newMan.officeNumber).toEqual("A02496");       
    })

    describe("getRole", () => {
        it("should provide the overwritten role of Manager", () => {
            const newMan = new Manager("Paul Scraighm", 5643, "test@test.test", "A02496");
            expect(newMan.getRole()).toEqual("Manager");
        })
    })
})