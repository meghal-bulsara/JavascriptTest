const spin = require('../spin').spin;

describe("Spin the word", () => {
  it("should spin words", () => {
    expect(spin('meghal bulsara')).toMatch('lahgemaraslub');
  });
});