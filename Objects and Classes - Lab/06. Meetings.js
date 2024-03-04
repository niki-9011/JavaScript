function meetingInfo(array) {
  const meetings = {};
  for (const iterator of array) {
    const [day, name] = iterator.split(" ");

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  Object.keys(meetings).forEach((day) => {
    console.log(`${day} -> ${meetings[day]}`);
  });
}
meetingInfo(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
