function employes(array) {
  const object = {};
  for (const employ of array) {
    object[employ] = employ.length;
  }
  Object.keys(object).forEach((element) => {
    console.log(`Name: ${element} -- Personal Number: ${object[element]}`);
  });
}
employes([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employes(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
