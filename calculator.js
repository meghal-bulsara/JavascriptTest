function validate(a,b){
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return true;
  }
  else {
    return false;
  }
}

var add = (a,b) => a + b;

var subtract = (a,b) => a - b;

var multiply = (a,b) => a * b;

var divide = (a,b) => a/b

function addition(a,b){
  if(validate(a,b)){
    return a+b;
  }
  else
  {
    return "Invalid Data";
  }
}

function subtraction(a,b){
  if (validate(a,b)) {
    if (b > a) {
      return 'Invalid'
    }else {
      return a-b;
    }
  }else{
    return "Invalid Data"
  }
}

function multiplication(a,b)
{
  if (validate(a,b)) {
    return a*b
  }
  else{
    return "Invalid Data"
  }
}

function division(a,b){
  if (validate(a,b)) {
    return a/b
  }
  else
  {
    return "Invalid Data"
  }
}
module.exports = {addition, subtraction, multiplication, division,add,subtract, multiply, divide}