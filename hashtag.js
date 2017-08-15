function hashTag(sentence){
  words = sentence.split(" ");
  output = "#"
  words.forEach(function(word){
    word = word[0].toUpperCase() + word.substr(1,word.length);
    output += word;
  });
  return output;
}

module.exports = {hashTag}