function negativePositiveNumbers(input) {
  let result = [];

  for (let number of input) {
    if (number >= 0) {
      result.push(number);
    } else {
      result.unshift(number);
    }
  }
  for (let element of result) {
    console.log(element);
  }
}
negativePositiveNumbers([7, -2, 8, 9]);
