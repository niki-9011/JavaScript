function pascaleCase(text) {
  const regex = /[A-Z][a-z]*/gm;
  const output = text.match(regex);
  console.log(output.join(", "));
}
pascaleCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascaleCase("HoldTheDoor");
pascaleCase("ThisIsSoAnnoyingToDo");
