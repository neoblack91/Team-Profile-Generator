const Manager = require("../lib/manager.js");

describe("Manager properties", () => {
    describe("Checking for Office Number and role", () => {
      // Positive test
      it("Checking Office Number and role", () => {
        // Arrange
        const officenumber = 123-456-7890;
  
        // Act
        const m = new Manager("foo", 6, "ub@gmail.com", officenumber);
  
        // Assert
        expect(m.officeNumber).toEqual(JSON.parse(123-456-7890));
        expect(m.getRole()).toEqual("manager");
      });
      // Exception test
      it("should throw an error if not provided a text string value", () => {
        // Arrange
        const ib = new Manager("", 4, "Columbia@gmail.com", "");
          expect(() => {
            if (ib.officeNumber === "")
            throw new Error("Please put a 'office number' it needs to be a string .");
          }).toThrow("Please put a 'office number' it needs to be a string .");
      });
      
    });
})
  
  