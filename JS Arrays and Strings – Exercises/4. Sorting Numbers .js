function sortingNumbers(array) {
  const result = [];
  array = array.sort((a, b) => a - b);
  for (let index = 0; index <= array.length + 2; index++) {
    result.push(array.shift());
    result.push(array.pop());
  }
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
