const Employee = require("../lib/employee.js");

describe("Employee properties", () => {
    describe("Checking for Name, id , and email", () => {
      // Positive test
      it("putting in Name, id, and email", () => {
       const Temployee = new Employee("Raja", 6, "employee@gmail.com");
        expect(Temployee.getName()).toEqual("Raja");
        expect(Temployee.getId()).toEqual(6);
        expect(Temployee.getEmail()).toEqual("employee@gmail.com");
        expect(Temployee.getRole()).toEqual("employee");
        // Assert
        
      });
    })
  })
    // // //   Exception test
    // //   it("should throw an error if not provided a 'text' value", () => {
    // //     // Arrange
    // //     const cb = () => new Employee();
    // //     const err = new Error(
    // //       "Expected parameter 'text' to be a non empty string"
    // //     );
  
    // //     // Assert
    // //     expect("jr").toThrowError(err);
    // //   });
      
    // // });
    // })




    
    