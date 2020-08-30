function processOddNumbers(array) {
  let resultArray = array
    .filter((num, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse();
  console.log(resultArray.join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
