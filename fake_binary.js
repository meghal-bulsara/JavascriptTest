function FakeBinary(number){
  output = ""
  numbers = number.split("");
  numbers.forEach(function(number){
    if (number < 5) {
      output += "0";
    }else{
      output += "1"
    }
  });
  return output
}
module.exports = {FakeBinary}
