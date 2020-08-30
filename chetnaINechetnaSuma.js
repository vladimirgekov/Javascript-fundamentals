function chetnaNechetnaSuma(number) {
  let chetnaSuma = 0;
  let nechetnaSuma = 0;
  let numString = number.toString();

  for (let i = 0; i < numString.length; i++) {
    let currentElement = Number(numString[i]);
    if (currentElement % 2 === 0) {
      chetnaSuma += currentElement;
    } else {
      nechetnaSuma += currentElement;
    }
  }
  console.log(`Odd sum = ${nechetnaSuma}, Even sum = ${chetnaSuma}`);
}
chetnaNechetnaSuma(1000435);
