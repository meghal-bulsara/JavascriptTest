function sumWithoutMinMax(numbers){
  sorted_array = numbers.sort();
  sorted_array.shift();
  sorted_array.pop();
  sum = 0;
  sorted_array.forEach(function(element){
    sum = sum + element;
  });

  return sum;
}

module.exports = {sumWithoutMinMax}