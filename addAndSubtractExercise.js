function addAndSubtract(a, b, c) {
  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  let sumRes = sum(a, b);
  let res = subtract(sumRes, c);
  console.log(res);
}
addAndSubtract(2, 5, 3);
