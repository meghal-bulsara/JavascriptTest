function countWins(list, country)
{
  var count = 0;
  list.forEach(function(details){
    if (details.country == country) {
      count++;
    }
  });
  return count;
}

module.exports = {countWins}