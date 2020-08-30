function loadingBar(number) {
  let percentSing = "%";
  let pointSing = ".";
  let percent = number / 10;
  let point = 10 - percent;

  if (number === 100) {
    console.log(`100% Complete!`);
    console.log(`[%%%%%%%%%%]`);
  }
  if (number % 10 === 0 && number !== 100) {
    console.log(
      `${number}% [${percentSing.repeat(percent)}${pointSing.repeat(point)}]`
    );
    console.log(`Still loading...`);
  }
}
loadingBar(30);
