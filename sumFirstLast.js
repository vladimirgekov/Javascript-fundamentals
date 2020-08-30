function sumFirstLast(numbers) {
  let firstElement = Number(numbers[0]);
  let lastElement = Number(numbers.pop());

  let result = firstElement + lastElement;

  console.log(result);
}
