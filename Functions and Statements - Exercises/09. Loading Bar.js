function loandingBar(percent) {
  let percentLoad = "%".repeat(percent / 10);
  let dotsLoad = ".".repeat(10 - percentLoad.length);
  
  if (percent === 100) {
    console.log(`100% Complete!`);
    console.log(`[%%%%%%%%%%]`);
  } else {
    console.log(`${percent}% [${percentLoad}${dotsLoad}]`);
    console.log(`Still loading...`);
  }
}
loandingBar(30);
loandingBar(50);
loandingBar(100);
