const windowCalling = require('../window').windowCalling;

describe("calling window function", () => {
  it("should return unique elements length of window", () => {
    arr = [1, 2, 1, 3, 4, 2, 3];
    expect(windowCalling(arr,0,4)).toBe(3)
  })
  
});