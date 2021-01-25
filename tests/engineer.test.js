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
      // it("should throw an error if not provided a 'text' value", () => {
      //   // Arrange
      //   const cb = () => new Intern();
      //   const err = new Error(
      //     "Expected parameter 'text' to be a non empty string"
      //   );
  
      //   // Assert
      //   expect(cb).toThrowError(err);
      // });
      
    });
  
  })