const Intern = require("../lib/intern.js");

test("Can set school via constructor", () => {
    const testValue = "UB";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testNOW);
  });