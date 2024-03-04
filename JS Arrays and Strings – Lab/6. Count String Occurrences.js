function countOccuttences(text, word) {
    let count = 0
    let array = text.split(' ')
    
    for (let index = 0; index < array.length; index++) {
        if (array[index] === word) count +=1;
        
    }
    console.log(count);
}
countOccuttences('This is a word and it also is a sentence', 'is')
countOccuttences('softuni is great place for learning new programming languages', 'softuni')