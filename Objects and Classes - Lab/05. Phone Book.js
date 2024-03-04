function phoneBook(array) {
  let object = {};
  for (const iterator of array) {
    let [key, value] = iterator.split(" ");
    object[key] = value;
  }
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];
      console.log(`${key} -> ${value}`);
    }
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
