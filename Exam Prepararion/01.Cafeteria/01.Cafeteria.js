function barista(input) {
  let numberBaristas = input.shift();
  let baristas = {};

  for (let index = 0; index < numberBaristas; index++) {
    let barista = input.shift().split(" ");
    let name = barista.shift();
    let work = barista.shift();
    let coffes = barista.shift().split(",");

    baristas[name] = [];
    baristas[name].push(work);

    for (let index = 0; index < coffes.length; index++) {
      baristas[name].push(coffes[index]);
    }
  }

  let command = input.shift().split(" / ");

  while (command[0] !== "Closed") {
    if (command[0] === "Prepare") {
      if (
        baristas[command[1]].includes(command[2]) &&
        baristas[command[1]].includes(command[3])
      ) {
        console.log(`${command[1]} has prepared a ${command[3]} for you!`);
      } else
        console.log(
          `${command[1]} is not available to prepare a ${command[3]}.`
        );
    } else if (command[0] === "Change Shift") {
      console.log(`${command[1]} has updated his shift to: ${command[2]}`);
      baristas[command[1]][0] = command[2];
    } else if (command[0] === "Learn") {
      if (baristas[command[1]].includes(command[2])) {
        console.log(`${command[1]} knows how to make ${command[2]}.`);
      } else {
        baristas[command[1]].push(command[2]);
        console.log(
          `${command[1]} has learned a new coffee type: ${command[2]}.`
        );
      }
    }

    command = input.shift().split(" / ");
  }
  for (const key in baristas) {
    console.log(
      `Barista: ${key}, Shift: ${baristas[key].shift()}, Drinks: ${baristas[
        key
      ].join(", ")}`
    );
  }
}
barista([
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
]);

barista([
  "4",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "David night Espresso",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / day",
  "Learn / Carol / Latte",
  "Prepare / Bob / night / Latte",
  "Learn / David / Cappuccino",
  "Prepare / Carol / day / Cappuccino",
  "Change Shift / Alice / night",
  "Learn / Bob / Mocha",
  "Prepare / David / night / Espresso",
  "Closed",
]);
