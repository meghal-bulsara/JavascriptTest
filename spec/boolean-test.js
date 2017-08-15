const validate = require('../boolean').validate;
const even = require('../boolean').even;
const odd = require('../boolean').odd;
const positive = require('../boolean').positive;
const negative = require('../boolean').negative


describe("validate number", () =>{
  it("should contain number", () => {
    expect(validate(5)).toBeTruthy();
  });

  it("should not contain string", () => {
    expect(validate('a')).toBeFalsy();
  });
});

describe("check even number", () => {
  it("should return true", () =>{
    expect(even(2)).toBeTruthy();
  })
  
  it("should return false", () => {
    expect(even(5)).toBeFalsy();
  })
});

describe("check odd number", () => {
  it("should return true", () =>{
    expect(odd(5)).toBeTruthy();
  })
  
  it("should return false", () => {
    expect(odd(2)).toBeFalsy();
  })
});

describe("check positive number", () => {
  it("should return true", () =>{
    expect(positive(5)).toBeTruthy();
  })
  
  it("should return false", () => {
    expect(positive(-2)).toBeFalsy();
  })
});

describe("check negative number", () => {
  it("should return true", () =>{
    expect(negative(-5)).toBeTruthy();
  })
  
  it("should return false", () => {
    expect(negative(2)).toBeFalsy();
  })
});