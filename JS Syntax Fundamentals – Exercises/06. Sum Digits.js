function sumDigits(number) {
    let sum = 0;
    let string = String(number);
    for (let index = 0; index < string.length ; index++) {
        sum += Number(string[index]);
    }
    console.log(sum)
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)