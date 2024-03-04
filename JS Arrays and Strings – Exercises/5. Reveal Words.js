function revealWords(words, text) {
  let wordsArray = words.split(", ");
  let textArray = text.split(" ");

  for (const word of wordsArray) {
    for (let i = 0; i < textArray.length; i++) {
      let repaet = "*".repeat(textArray[i].length);

      if (word.length === textArray[i].length && textArray[i] === repaet) {
        text = text.replace("*".repeat(textArray[i].length), word);
      }
    }
  }
  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning, niki",
  "softuni is ***** place for ******** new programming languages"
);
