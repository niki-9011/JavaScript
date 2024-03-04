function evenOddSubtraction(args) {
    let even = 0;
    let odd = 0;
    for (let index = 0; index < args.length; index++) {
        if (args[index] % 2 === 0) {
            even += args[index];
        } else {
            odd += args[index];
        }
    }
    console.log(even - odd);
}
evenOddSubtraction([1,2,3,4,5,6])
evenOddSubtraction([3,5,7,9])
evenOddSubtraction([2,4,6,8,10])