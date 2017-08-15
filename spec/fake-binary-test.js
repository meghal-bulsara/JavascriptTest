const fakeBinary = require('../fake_binary').fakeBinary

describe('Fake Binary', () => {
  it("should generate fake Binary", () =>{
    expect(fakeBinary('1234567')).toBe('0000111')
  })
})