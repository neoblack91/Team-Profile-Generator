const Employee = require("../lib/employee.js");

describe("Employee properties", () => {
    describe("Checking for Name", () => {
      // Positive test
      it("putting in Name", () => {
        // Arrange
        const Rname = "Raja";
  
        // Act
        const em = new Employee("Raja", 6, "ub@gmail.com", Rname);
  
        // Assert
        expect(em.getName()).toEqual("Raja");
      });
    // //   Exception test
    //   it("should throw an error if not provided a 'text' value", () => {
    //     // Arrange
    //     const cb = () => new Employee();
    //     const err = new Error(
    //       "Expected parameter 'text' to be a non empty string"
    //     );
  
    //     // Assert
    //     expect("jr").toThrowError(err);
    //   });
      
    // });
    })

    describe("Checking  id", () => {
        // Positive test
        it("putting in id", () => {
          // Arrange
          const id = 6;
    
          // Act
          const obj = new Employee("foo", 6, "employee@gmail.com", id);
    
          // Assert
          expect(obj.getId()).toEqual(6);
        });
        
    });

    describe("Checking  for email", () => {
        // Positive test
        it("putting in email", () => {
          // Arrange
          const mail = "employee@gmail.com";
    
          // Act
          const obj = new Employee("foo", 6, "employee@gmail.com", mail);
    
          // Assert
          expect(obj.getEmail()).toEqual("employee@gmail.com");
        });
        
    });

    describe("Checking for role", () => {
        // Positive test
        it("putting in role", () => {
          // Arrange
          const roleInfo = "employee";
    
          // Act
          const obj = new Employee("foo", 6, "employee@gmail.com", roleInfo);
    
          // Assert
          expect(obj.getRole()).toEqual("employee");
        });
        
    });
})

    
    