function factorialDivision(numOne, numTwo) {
  function factorial(num) {
    let res = 1;

    for (let i = 1; i <= num; i++) {
      res *= i;
    }

    return res;
  }

  let factorialOne = factorial(numOne);
  let factorialTwo = factorial(numTwo);

  let res = factorialOne / factorialTwo;
  console.log(res.toFixed(2));
}
