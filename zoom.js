function helpZoom(numbers){
  var len = numbers.length;
  if(len % 2 == 0){
    return "Invalid"
  }else{
    leftArray = numbers.slice(0,(len/2));
    console.log(leftArray);
    rightArray = numbers.slice((len/2)+1).reverse();
    console.log(rightArray);
    if (leftArray.join("") == rightArray.join("")) {
      return "yes";
    }
    else{
      return "no"
    }
  }
}

console.log(helpZoom([1,1,0,0,0,0,0,1,1]))
module.exports = {helpZoom}