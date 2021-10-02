const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have all parameters match and be called properly", () => {
        const newEng = new Engineer("Paul Scraighm", 5643, "test@test.test", "pscraighm1234");
        expect(newEng.gitHub).toEqual("pscraighm1234");       
    })

    describe("getGithub", () => {
        it("should provide the GitHub username of Engineer", () => {
            const newEng = new Engineer("Paul Scraighm", 5643, "test@test.test", "pscraighm1234");
            expect(newEng.getName()).toEqual("Engineer");
        })
    })
})