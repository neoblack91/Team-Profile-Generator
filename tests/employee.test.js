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
    it("should throw an error if not provided a text string value", () => {
      // Arrange
      const ib = new Employee("", "", "", "");
        expect(() => {
          if (ib.getName() === "", ib.getId() ==="", ib.getEmail()==="")
          throw new Error("Please put a 'name, id , email' it needs to be a string .");
        }).toThrow("Please put a 'name, id , email' it needs to be a string .");
    });




    
    