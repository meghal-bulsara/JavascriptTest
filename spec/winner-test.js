const countWins = require('../winner').countWins;

describe("winner list count", () => {
  it("should return countWis", () => {
    winnerList = [
      {"season" : "1999-00", "team" : "Real Madrid", "country" : "Spain"},
      {"season" :  "2000-01", "team" : "Bayern Munich", "country" : "Germany"},
      {"season" : "2001-02", "team" : "Real Madrid", "country" : "Spain"},
      {"season" : "2002-03", "team" : "Milan", "country" : "Italy"},
      {"season" : "2003-04", "team" : "Porto", "country" : "Portugal"}
    ]

    expect(countWins(winnerList,"Spain")).toBe(2);
    expect(countWins(winnerList, "India")).toBe(0);
  });
});