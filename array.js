function validate(numbers){
  if (typeof(numbers) == 'object') {
    return true;
  }
  else{
    return false;
  }
}
function lengthOfArray(numbers){
  return numbers.length;
}

function minValue(numbers){
  numbers = numbers.sort();
  return numbers[0]
}

function maxValue(numbers){
  numbers = numbers.sort().reverse();
  return numbers[0]
}
module.exports = {lengthOfArray, validate, minValue,maxValue}