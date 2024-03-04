function storeProvision(store, provision) {
  let storeObject = {};

  for (let index = 0; index < store.length; index += 2) {
    storeObject[store[index]] = Number(store[index + 1]);
  }

  for (let index = 0; index < provision.length; index += 2) {
    if (storeObject.hasOwnProperty(provision[index])) {
      storeObject[provision[index]] += Number(provision[index + 1]);
    } else {
      storeObject[provision[index]] = provision[index + 1];
    }
  }
  Object.keys(storeObject).forEach((element) => {
    console.log(` ${element} -> ${storeObject[element]}`);
  });
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
