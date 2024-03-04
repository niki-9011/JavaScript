function carInOut(cars) {
  let parking = [];
  for (const car of cars) {
    let [command, numberCar] = car.split(", ");
    if (command === "IN" && !parking.includes(numberCar)) {
      parking.push(numberCar);
    } else if (command === "OUT" && parking.includes(numberCar)) {
      for (let index = 0; index < parking.length; index++) {
        if (numberCar === parking[index]) {
          let el = parking.splice(index, 1);
        }
      }
    }
  }
  if (parking.length > 0) {
    parking.sort().forEach((element) => {
      console.log(element);
    });
  } else console.log("Parking Lot is Empty");
}
carInOut([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
carInOut(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
