function sorting(input) {
  let output = [];
  let sortedArray = input.slice(0).sort((a, b) => b - a);
  while (sortedArray.length !== 0) {
    output.push(sortedArray.shift());
    output.push(sortedArray.pop());
  }

  console.log(output.join(" "));
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
