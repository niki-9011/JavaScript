function ticketSale(day, age) {
  let price;
  const days = ["Weekday", "Weekend", "Holiday"];

  if (0 <= age && age <= 122) {
    if (day === days[0] && 0 <= age && age <= 18) {
      price = "12$";
    } else if (day === days[0] && 18 <= age && age <= 64) {
      price = "18$";
    } else if (day === days[0] && 64 <= age && age <= 122) {
      price = "12$";
    } else if (day === days[1] && 0 <= age && age <= 18) {
      price = "15$";
    } else if (day === days[1] && 18 <= age && age <= 64) {
      price = "20$";
    } else if (day === days[1] && 64 <= age && age <= 122) {
      price = "15$";
    } else if (day === days[2] && 0 <= age && age <= 18) {
      price = "5$";
    } else if (day === days[2] && 18 <= age && age <= 64) {
      price = "12$";
    } else if (day === days[2] && 64 <= age && age <= 122) {
      price = "10$";
    }
  } else {
    price = "Error!";
  }
  console.log(price);
}
ticketSale("Weekend", 42);
ticketSale("Holiday", -12);
ticketSale("Holiday", 15);
ticketSale("Weekday", 42);
