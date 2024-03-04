function largestNumber(num1, num2, num3) {
  const numbers = [num1, num2, num3];
  const result = numbers.sort((a, b) => a - b)[2];

  console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16);
