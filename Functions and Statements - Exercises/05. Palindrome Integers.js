function palindorme(array) {
  function isPalindrome(numbers) {
    let numStr = numbers.toString();
    let numReversed = numStr.split("").reverse().join("");

    return numReversed === numStr;
  }
  for (const iterator of array) {
    console.log(isPalindrome(iterator));
  }
}
palindorme([123, 323, 421, 121]);
palindorme([32, 2, 232, 1010]);
