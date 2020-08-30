function distinctArray(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (!output.includes(input[i])) {
      output.push(input[i]);
    }
  }
  return output.join(" ");
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
