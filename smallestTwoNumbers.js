function smallestTwoNumbers(array) {
  array.sort((a, b) => a - b);
  let result = array.slice(0, 2);
  console.log(result.join(" "));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
