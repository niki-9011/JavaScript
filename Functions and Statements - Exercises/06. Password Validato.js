function passwordValidator(password) {
  function passwordLength(text) {
    return text.length >= 6 && text.length <= 12;
  }
  function isAlphaNumeric(text) {
    let regex = /^[a-zA-Z0-9]+$/gm;
    return regex.test(text);
  }
  function twoDigits(text) {
    let sum = 0;
    for (const iterator of text) {
      if (!isNaN(iterator)) {
        sum += 1;
      }
    }
    return sum >= 2;
  }
  if (!passwordLength(password)) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (!isAlphaNumeric(password)) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (!twoDigits(password)) {
    console.log(`Password must have at least 2 digits`);
  }
  if (
    isAlphaNumeric(password) &&
    passwordLength(password) &&
    twoDigits(password)
  ) {
    console.log(`Password is valid`);
  }
}
passwordValidator("logIn");
// Password must be between 6 and 10 characters
// Password must have at least 2 digits

passwordValidator("MyPass123");
// Password is valid

passwordValidator("Pa$s$s");
// Password must consist only of letters and digits
// Password must have at least 2 digits
