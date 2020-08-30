function reverseOfArrayOfNumbers(num, numbers) {
  let numbersSlice = [];

  for (let i = 0; i < num; i++) {
    numbersSlice.push(numbers[i]);
  }

  let result = "";

  for (i = numbersSlice.length - 1; i >= 0; i--) {
    result += numbersSlice[i] + " ";
  }

  console.log(result);
}
reverseOfArrayOfNumbers(3, [10, 20, 30, 40, 50]);
