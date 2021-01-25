const Intern = require("../lib/intern.js");

describe("Intern properties", () => {
  describe("Checking for school and role", () => {
    // Positive test
    it("putting in schoolinfo", () => {
      // Arrange
      const CollegeInfo = "UB";

      // Act
      const i = new Intern("foo", 6, "ub@gmail.com", CollegeInfo);

      // Assert
      expect(i.school).toEqual("UB");
      expect(i.getRole()).toEqual("Intern");
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
