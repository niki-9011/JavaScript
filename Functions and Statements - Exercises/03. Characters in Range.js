function charAskiRange(startChar, endChar) {
  const result = [];
  let start = Math.min(startChar.charCodeAt(), endChar.charCodeAt());
  let end = Math.max(startChar.charCodeAt(), endChar.charCodeAt());

  for (let index = start + 1; index < end; index++) {
    result.push(String.fromCharCode(index));
  }
  console.log(result.join(" "));
}
charAskiRange("a", "d");
charAskiRange("#", ":");
charAskiRange("C", "#");
