function mountPrint(number) {
  let mount;

  switch (number) {
    case 1:
      mount = "January";
      break;
    case 2:
      mount = "February";
      break;
    case 3:
      mount = "March";
      break;
    case 4:
      mount = "April";
      break;
    case 5:
      mount = "May";
      break;
    case 6:
      mount = "June";
      break;
    case 7:
      mount = "July";
      break;
    case 8:
      mount = "August";
      break;
    case 9:
      mount = "September";
      break;
    case 10:
      mount = "October";
      break;
    case 11:
      mount = "November";
      break;
    case 12:
      mount = "December";
      break;
    default:
      mount = "Error!";
  }
  console.log(mount);
}
mountPrint(2);
mountPrint(13);
