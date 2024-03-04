function hashTag(text) {
  let regex = /#+[a-zA-z]+/gm;
  for (const find of text.match(regex)) {
    console.log(find.slice(1, find.length));
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
