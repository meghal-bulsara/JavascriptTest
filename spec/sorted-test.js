const sumWithoutMinMax = require('../sorted_array').sumWithoutMinMax;

describe("sum of array without min and max value", () => {
  it("should do sum without min and max", () => {
    expect(sumWithoutMinMax([1,2,3,4,5,6])).toBe(14)
  });
});