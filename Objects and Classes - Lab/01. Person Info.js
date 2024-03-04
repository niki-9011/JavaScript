function personInfo(firstName, lastName, age) {
  let object = {};

  object.firstName = firstName;
  object.lastName = lastName;
  object.age = age;

  return object;
}
personInfo("Peter", "Pan", "20");
personInfo("George", "Smith", "18");
