const helpZoom = require('../zoom').helpZoom;

describe("helpZoom", () =>{
  it("should return invalid", () =>{
    expect(helpZoom([1,1,0,0,0,0,0,1])).toMatch('Invalid');
  });
});

describe("helpZoom", () => {
  it("should return yes", () => {
    expect(helpZoom([1,1,0,0,0,0,0,1,1])).toMatch('yes');
  });
});

describe("helpZoom", () =>{
  it("should return no", () => {
    expect(helpZoom([1,1,1,1,0,0,0,0,0])).toMatch('no')
  })
});