function printSum(num1, num2) {
  let sum = 0;
  let allNums = "";

  for (let index = num1; index <= num2; index++) {
    sum += index;
    allNums += index + " ";
  }
  console.log(allNums);
  console.log(`Sum: ${sum}`);
}
printSum(5, 10);
printSum(0, 26);
printSum(50, 60);
