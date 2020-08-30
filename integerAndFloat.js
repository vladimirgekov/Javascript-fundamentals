function integerAndFloat(numberOne, numberTwo, numberThree) {
  let sum = numberOne + numberTwo + numberThree;

  let wholePart = parseInt(sum);

  if (wholePart === sum) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
