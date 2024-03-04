function matrix(number) {
  function nXnRow(num) {
    return (num.toString() + ' ').repeat(num);
  }
  for (let index = 1; index <=  number; index++) {
    console.log(nXnRow(number));
  }
}
matrix(3);
matrix(7);
matrix(2);
