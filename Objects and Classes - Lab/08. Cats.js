function catsSong(array) {
  let cats = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let index = 0; index < array.length; index++) {
    let catInfo = array[index].split(" ");
    let [name, age] = catInfo;
    let newCat = new Cat(name, age);
    newCat.meow();
    cats.push(newCat);
  }
}
catsSong(["Mellow 2", "Tom 5"]);
catsSong(['Candy 1', 'Poppy 3', 'Nyx 2'])
