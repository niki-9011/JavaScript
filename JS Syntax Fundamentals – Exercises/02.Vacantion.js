function vacation(peoples, type, day) {
  let price = 0;
  const types = ["Students", "Business", "Regular"];
  const days = ["Friday", "Saturday", "Sunday"];

  if (day === days[0]) {
    if (type === types[0]) price = 8.45;
    else if (type === types[1]) price = 10.9;
    else if (type === types[2]) price = 15;
  } else if (day === days[1]) {
    if (type === types[0]) price = 9.8;
    else if (type === types[1]) price = 15.6;
    else if (type === types[2]) price = 20;
  } else if (day === days[2]) {
    if (type === types[0]) price = 10.46;
    else if (type === types[1]) price = 16;
    else if (type === types[2]) price = 22.5;
  }
  if (type === types[0]) {
    if (peoples >= 30) price = price * peoples * 0.85;
    else price = price * peoples;
  } else if (type === types[1]) {
    if (peoples >= 100) price = price * peoples - 10 * price;
    else price = price * peoples;
  } else if (type === types[2]) {
    if (peoples >= 10 && peoples <= 20) price = price * peoples * 0.95;
    else price = price * peoples;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
