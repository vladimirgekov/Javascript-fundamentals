function evenAndOddSubtraction(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let diff = evenSum - oddSum;

  console.log(diff);
}
evenAndOddSubtraction([3, 5, 7, 9]);
