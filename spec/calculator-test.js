const addition = require('../calculator').addition;
const subtraction = require('../calculator').subtraction
const multiplication = require('../calculator').multiplication
const division = require('../calculator').division
const add = require('../calculator').add
const subtract = require('../calculator').subtract
const multiply = require('../calculator').multiply
const divide = require('../calculator').divide

describe('add', () =>{
  it ("should do addition of two numbers", () => {
    expect(add(2,3)).toBe(5);
  });
});

describe('subtract', () =>{
  it ("should do subtraction of two numbers", () => {
    expect(subtract(5,3)).toBe(2);
  });
});

describe('multiply', () =>{
  it ("should do multiplication of two numbers", () => {
    expect(multiply(2,3)).toBe(6);
  });
});

describe('divide', () =>{
  it ("should do division of two numbers", () => {
    expect(divide(6,3)).toBe(2);
  });
});

describe('addition', () =>{
  it ("should do addition of two numbers", () => {
    expect(addition(2,3)).toBe(5);
  });

  it("should contain only numbers", () => {
    expect(addition('a',2)).toMatch('Invalid Data');
  })
});

describe('subtraction', () => {
  it("should do subtraction of two numbers", () =>{
    expect(subtraction(5,3)).toBe(2);
  });

  it("should contain only numbers", () => {
    expect(subtraction('a',2)).toMatch('Invalid Data');
  });

  it("should a is greater than b", () => {
    expect(subtraction(3,5)).toMatch('Invalid');
  });
});

describe('multiplication', () => {
  it("should do multiplication of two numbers",() => {
    expect(multiplication(2,3)).toBe(6);
  });

  it("should contain only numbers", () => {
    expect(multiplication('a',3)).toMatch('Invalid Data');
  });
});

describe('division', () => {
  it("should do division of two numbers", () =>{
    expect(division(6,3)).toBe(2);
  });
  it("should contain only numbers", () =>{
    expect(division('a',2)).toMatch('Invalid Data');
  })
});