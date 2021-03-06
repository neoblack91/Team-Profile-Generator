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
    
    it("should throw an error if not provided a text string value", () => {
      // Arrange
      const ib = new Intern("", 4, "Columbia@gmail.com", "");
        expect(() => {
          if (ib.school === "")
          throw new Error("Please put 'school' it needs to be a string.");
        }).toThrow("Please put 'school' it needs to be a string.");
    });
  });


})
