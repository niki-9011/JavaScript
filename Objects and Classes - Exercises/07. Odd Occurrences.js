function findOddwords(array) {
  let text = array.split(" ");
  let object = {};
  let words = [];
  let string = "";

  for (const word of text) {
    let wordLower = word.toLowerCase();
    if (!object.hasOwnProperty(wordLower)) {
      object[wordLower] = Number(1);
      words.push(wordLower);
    } else object[wordLower] += 1;
  }
  for (const word of words) {
    if (object[word] % 2 !== 0) {
      string += word + " ";
    }
  }
  console.log(string);
}
findOddwords("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
findOddwords("Cake IS SWEET is Soft CAKE sweet Food");
