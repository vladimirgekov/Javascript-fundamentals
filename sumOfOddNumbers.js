function sumOfOddNumbers(number) {
  let sum = 0;
  let counter = 1;
  let currentNumber = 1;
  while (counter < number) {
    if (currentNumber % 2 != 0) {
      console.log(currentNumber);
      counter++;
      sum += currentNumber;
      counter++;
    }
    currentNumber++;
  }
  console.log("Sum: " + sum);
}
