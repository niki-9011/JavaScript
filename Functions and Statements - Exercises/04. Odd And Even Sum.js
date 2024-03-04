function oddSumEven(number) {
  let strNumber = number.toString();
  let odd = 0;
  let even = 0;
  for (let index = 0; index < strNumber.length; index++) {
    let value = Number(strNumber[index]);
    if (value % 2 === 0) even += value;
    else odd += value;
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddSumEven(1000435);
oddSumEven(3495892137259234);
