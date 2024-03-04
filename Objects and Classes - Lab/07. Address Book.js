function addressBook(array) {
  const addressList = {};

  for (const person of array) {
    const [name, address] = person.split(":");
    addressList[name] = address;
  }
  const pepleName = Object.entries(addressList);
  const sortedPeople = pepleName.sort();

  for (const iterator of sortedPeople) {
    console.log(`${iterator[0]} -> ${iterator[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
