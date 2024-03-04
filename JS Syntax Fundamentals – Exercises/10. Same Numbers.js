function sameNumbers(number) {
    let string = String(number);
    let num = [];

    for (let index = 0; index < string.length ; index++) {
        num.push(Number(string[index]))
    }

    let set = [...new Set(num)]
    if (set.length === 1){
        console.log('true');
    }
    else{
        console.log('false');
    }
    console.log(num.reduce((a,b) => a + b ));
}
sameNumbers(2222222)
sameNumbers(1234)