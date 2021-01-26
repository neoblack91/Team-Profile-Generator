const Engineer = require("../lib/engineer.js");

describe("Engineer properties", () => {
    describe("Checking for Github and role", () => {
      // Positive test
      it("putting in githubinfo", () => {
        // Arrange
        const Github = "neo";
  
        // Act
        const e = new Engineer("foo", 6, "ub@gmail.com", Github);
  
        // Assert
        expect(e.getGithub()).toEqual("neo");
        expect(e.getRole()).toEqual("Engineer");
      });
      // Exception test
      it("should throw an error if not provided a text string value", () => {
        // Arrange
        const ib = new Engineer("", 4, "Columbia@gmail.com", "");
          expect(() => {
            if (ib.Github === "")
            throw new Error("Please put a 'github' it needs to be a string .");
          }).toThrow("Please put a 'github' it needs to be a string .");
      });
    });
      
    });
  
  