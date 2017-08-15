const greeting = require('../greeting').greeting;

describe("Greeting world", () => {
  it("should greet Hello world", () => {
    expect(greeting()).toMatch("Hello World");
  });
});