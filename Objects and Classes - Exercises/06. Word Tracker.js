function wordCounter(array) {
  let wordSearch = array[0].split(" ");
  let wordsObj = {};
  let words = array.splice(0, 1);

  for (const word of wordSearch) {
    if (!array.includes(word)) {
      wordsObj[word] = 0;
    } else {
      for (const iterator of array) {
        if (iterator === word) {
          if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = Number(1);
          } else wordsObj[word] += 1;
        }
      }
    }
  }
  const sorted = Object.entries(wordsObj)
    .sort(([, b], [, a]) => a - b)
    .reduce(
      (r, [k, v]) => ({
        ...r,
        [k]: v,
      }),
      {}
    );
  Object.keys(sorted).forEach((element) => {
    console.log(` ${element} - ${sorted[element]}`);
  });
}
wordCounter([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordCounter([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
