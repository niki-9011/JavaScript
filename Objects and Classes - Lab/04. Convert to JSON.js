function convertToJson(firstName, lastName, hairColor) {
  let object = {};
  object.name = firstName;
  object.lastName = lastName;
  object.hairColor = hairColor;
  console.log(JSON.stringify(object))
}
convertToJson("George", "Jones", "Brown");
convertToJson("Peter", "Smith", "Blond");
