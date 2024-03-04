function sum(num1, num2, num3) {
  let num1PlusNum2 = num1 + num2;

  function subtract(num1PlusNum2, num3) {
    return num1PlusNum2 - num3;
  }
  console.log(subtract(num1PlusNum2, num3));
}
sum(23, 6, 10);
sum(1, 17, 30);
sum(42, 58, 100);
