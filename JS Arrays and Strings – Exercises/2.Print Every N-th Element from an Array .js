function nThElement(array, number) {
  const result = [];

  for (let i = 0; i < array.length; i += number) {
    result.push(array[i]);
  }
  return result;
}
console.log(nThElement(["5", "20", "31", "4", "20"], 2));
console.log(nThElement(["dsa", "asd", "test", "tset"], 2));
console.log(nThElement(["1", "2", "3", "4", "5"], 6));
