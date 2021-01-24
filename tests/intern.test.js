const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Checking for school", () => {
    // Positive test
    it("putting in schoolinfo", () => {
      // Arrange
      const CollegeInfo = "UB";

      // Act
      const r = new Intern("foo", 6, "ub@gmail.com", CollegeInfo);

      // Assert
      expect(r.school).toEqual("UB");
    });
    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Intern();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});
