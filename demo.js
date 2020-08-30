function sumFirstAndLastElementOfArray(input) {
  let firstNumberText = input[0];
  let lastNumberText = input[input.length - 1];

  let firstNumber = Number(firstNumberText);
  let secodNumber = Number(lastNumberText);

  let result = firstNumber + secodNumber;

  console.log(result);
}
sumFirstAndLastElementOfArray(["20", "30", "40"]);
