function equalArrays(array1, array2) {
  let areEqual = true;
  let arrSum = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      arrSum += Number(array1[i]);
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${arrSum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
