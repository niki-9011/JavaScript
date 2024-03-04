function reverseNumbers(...args) {
    let array = [...args[args.length -1]]
    console.log(array.slice(0,args[0]).reverse().join(' '))
}
reverseNumbers(3, [10, 20, 30, 40, 50])
reverseNumbers(4, [-1, 20, 99, 5])
reverseNumbers(2, [66, 43, 75, 89, 47])