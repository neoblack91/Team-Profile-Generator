const Manager = require("../lib/manager.js");

describe("Manager properties", () => {
    describe("Checking for Office Number and role", () => {
      // Positive test
      it("Checking Office Number", () => {
        // Arrange
        const officeNumber = 123-456-7890;
  
        // Act
        const m = new Manager("foo", 6, "ub@gmail.com", officeNumber);
  
        // Assert
        expect(m.office).toEqual(123-456-7890);
        
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
  
    describe("Checking for role", () => {
      // Positive test
      it("putting in role", () => {
        // Arrange
        const roleInfo = "manager";
  
        // Act
        const obj = new Manager("foo", 6, "manager@gmail.com", roleInfo);
  
        // Assert
        expect(obj.getRole()).toEqual("manager");
      });
      
  });
  })
  