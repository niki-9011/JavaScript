function invenotry(array) {
  let heros = [];
  array.forEach((element) => {
    let [name, level, items] = element.split(" / ");
    heros.push({ name, level, items });
  });

  heros.sort((a, b) => a.level - b.level);

  for (const hero of heros) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
invenotry([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
invenotry([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
