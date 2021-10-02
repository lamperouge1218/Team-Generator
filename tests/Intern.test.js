const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should have all parameters match and be called properly", () => {
        const newInt = new Intern("Paul Scraighm", 5643, "test@test.test", "MIT");
        expect(newInt.school).toEqual("MIT");       
    })

    describe("getSchool", () => {
        it("should provide the College of Intern", () => {
            const newInt = new Intern("Paul Scraighm", 5643, "test@test.test", "MIT");
            expect(newInt.getSchool()).toEqual("Intern School: MIT");
        })
    })

    describe("getRole", () => {
        it("should provide the overwritten role of Intern", () => {
            const newInt = new Intern("Paul Scraighm", 5643, "test@test.test", "MIT");
            expect(newInt.getRole()).toEqual("Intern");
        })
    })
})