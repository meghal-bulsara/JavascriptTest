const lengthOfArray = require('../array').lengthOfArray;
const validate = require('../array').validate;
const minValue = require('../array').minValue;
const maxValue = require('../array').maxValue;

describe("check typeof object", () => {
  it("should contain array", () =>{
    expect(validate([1,2,3])).toBeTruthy();
  });
});

describe("Length of array", () => {
  it("should return length of an array", () => {
    expect(lengthOfArray([1,2,3,4,5])).toBe(5)
  })
});

describe("min value of an array", () =>{
  it("should return min value", () =>{
    expect(minValue([2,4,6,1,6,8,7])).toBe(1);
  })
});

describe('max value of an array', () => {
  it('should return max value', () =>{
    expect(maxValue([1,3,2,5,8,9])).toBe(9)
  })
});