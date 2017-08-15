const FakeBinary = require('../fake_binary').FakeBinary

describe('Fake Binary', () => {
  it("should generate fake Binary", () =>{
    expect(FakeBinary('1234567')).toBe('0000111')
  })
})