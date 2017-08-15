const hashTag = require('../hashtag').hashTag;

describe("HashTag generator", () => {
  it("should generator hash tag", () => {
    expect(hashTag('meghal bulsara')).toMatch('#MeghalBulsara')
  })
});