function spin(sentence){
  output = "";
  words = sentence.split(" ");
  words.forEach(function(word){
    //console.log(word);
    word_array = word.split("");
    word_array.reverse();
    new_word = word_array.join("");
    output += new_word
  });
  return output
}

module.exports = {spin}