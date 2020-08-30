function printAndSum(startNumber, endNumber) {
  let result = 0;
  let output = "";

  for (let i = startNumber; i <= endNumber; i++) {
    result += i;
    output += `${i} `;
  }

  console.log(output);
  console.log(`Sum: ${result}`);
}
printAndSum(5, 10);
