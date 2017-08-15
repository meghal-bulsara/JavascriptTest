Array.prototype.unique = function(){
  var result = [];
  this.forEach(function(value){
    if (result.indexOf(value) == -1) {
      result.push(value);
    }
  });
  return result;
}


function windowCalling(arr,start_value, end_value){
  window = arr.slice(start_value,end_value);
  return window.unique().length;
}

module.exports = {windowCalling}