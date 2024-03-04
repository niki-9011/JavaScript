function factorialDivision(num1, num2) {
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return num * factorialize(num - 1);
  }
  let numOne = factorialize(num1);
  let numTwo = factorialize(num2);
  console.log((numOne / numTwo).toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
