function magicSum(arr = [], number) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let firstElement = arr[i];
      let secontElement = arr[j];
      sum = firstElement + secontElement;

      if (sum === number) {
        console.log(`${firstElement} ${secontElement}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
