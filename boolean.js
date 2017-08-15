function validate(number){
  if (typeof(number) === 'number') {
    return true;
  }
  else{
    return false;
  }
}
function even(number){
  if (number % 2 == 0) {
    return true;
  }else
  {
    return false;
  }
}

function odd(number){
  if (number % 2 != 0) {
    return true;
  }else{
    return false;
  }
}

function positive(number){
  if (number > 0) {
    return true;
  }else{
    return false;
  }
}

function negative(number){
  if (number < 0) {
    return true;
  }else{
    return false;
  }
}
module.exports = {validate, even, odd, positive,negative} 